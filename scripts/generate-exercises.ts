import fs from "fs";
import path from "path";
import { generateExerciseWithLLM } from "./lib/llm-client.ts";
import { validateExercise } from "./lib/validator.ts";
import {
  writeExerciseFile,
  ensureDirectoryStructure,
  generateExerciseTypeScript,
} from "./lib/file-writer.ts";
import { learningPath } from "../src/features/learning-path/infrastructure/data/learningPathConfig.ts";

interface GenerationState {
  totalAttempted: number;
  totalSuccessful: number;
  totalFailed: number;
  lastCompletedIndex: number;
  failedExercises: Array<{ topic: string; difficulty: string; error: string }>;
}

const PROJECT_ROOT = process.cwd();
const CHECKPOINT_FILE = path.join(PROJECT_ROOT, ".generation-checkpoint.json");
const DRY_RUN = process.argv.includes("--dry-run");
const RESUME = process.argv.includes("--resume");

async function loadCheckpoint(): Promise<GenerationState> {
  if (RESUME && fs.existsSync(CHECKPOINT_FILE)) {
    const data = fs.readFileSync(CHECKPOINT_FILE, "utf-8");
    console.log("📋 Resuming from checkpoint...");
    return JSON.parse(data);
  }

  return {
    totalAttempted: 0,
    totalSuccessful: 0,
    totalFailed: 0,
    lastCompletedIndex: -1,
    failedExercises: [],
  };
}

async function saveCheckpoint(state: GenerationState): Promise<void> {
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(state, null, 2));
}

function getExerciseList(): Array<{
  topic: string;
  topicName: string;
  topicSlug: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  exerciseName: string;
  description: string;
}> {
  const exercises: Array<{
    topic: string;
    topicName: string;
    topicSlug: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    exerciseName: string;
    description: string;
  }> = [];

  for (const topic of learningPath) {
    for (const difficulty of ["beginner", "intermediate", "advanced"] as const) {
      const slugs = topic.exerciseSlugs[difficulty] || [];
      if (Array.isArray(slugs)) {
        for (const slug of slugs) {
          exercises.push({
            topic: topic.title,
            topicName: topic.title,
            topicSlug: topic.topicKey,
            difficulty,
            exerciseName: slug
              .split("-")
              .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" "),
            description: `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} level exercise: ${slug}`,
          });
        }
      }
    }
  }

  return exercises;
}

async function generateSingleExercise(exercise: {
  topic: string;
  topicName: string;
  topicSlug: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  exerciseName: string;
  description: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    // Example exercise for reference (this would be fetched in real scenario)
    const exampleExercise = `{
  "slug": "example-exercise",
  "title": "Example Exercise",
  "description": "An example exercise demonstrating the format",
  "initialCode": "// TODO: implement",
  "solution": "// complete implementation",
  "tests": [
    { "description": "Test case", "assertion": "expect(result).toBe(expected)" }
  ],
  "hints": ["Hint 1"],
  "usageExample": "// Usage example"
}`;

    const generatedExercise = await generateExerciseWithLLM({
      topicSlug: exercise.topicSlug,
      topicName: exercise.topicName,
      difficulty: exercise.difficulty,
      exerciseName: exercise.exerciseName,
      description: exercise.description,
      exampleExercise,
    });

    // Validate the generated exercise
    const validation = validateExercise({
      ...generatedExercise,
      category: exercise.topic,
      difficulty: exercise.difficulty,
      builtIn: true,
      tags: [exercise.topic, exercise.difficulty],
    });

    if (!validation.valid) {
      return {
        success: false,
        error: `Validation failed: ${validation.errors.join("; ")}`,
      };
    }

    if (!DRY_RUN) {
      // Write to file
      const writeResult = await writeExerciseFile(
        {
          slug: generatedExercise.slug,
          title: generatedExercise.title,
          description: generatedExercise.description,
          category: exercise.topic,
          difficulty: exercise.difficulty,
          initialCode: generatedExercise.initialCode,
          solution: generatedExercise.solution,
          tests: generatedExercise.tests,
          hints: generatedExercise.hints,
          usageExample: generatedExercise.usageExample,
        },
        PROJECT_ROOT
      );

      if (!writeResult.success) {
        return {
          success: false,
          error: writeResult.error || "Unknown write error",
        };
      }
    }

    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: errorMessage };
  }
}

async function main(): Promise<void> {
  console.log("🚀 Exercise Generator Started");
  console.log(`📍 Project root: ${PROJECT_ROOT}`);
  console.log(`🔧 Mode: ${DRY_RUN ? "DRY-RUN" : "LIVE"}`);
  console.log(`📝 Resume: ${RESUME ? "Yes" : "No"}\n`);

  // Load checkpoint
  const state = await loadCheckpoint();

  // Ensure directory structure exists
  if (!DRY_RUN) {
    await ensureDirectoryStructure(PROJECT_ROOT);
    console.log("📁 Directory structure ensured\n");
  }

  // Get list of exercises to generate
  const exercises = getExerciseList();
  console.log(`📊 Total exercises to generate: ${exercises.length}`);

  if (DRY_RUN) {
    console.log("📌 DRY-RUN MODE: No files will be written\n");
  }

  // Process exercises
  for (let i = state.lastCompletedIndex + 1; i < exercises.length; i++) {
    const exercise = exercises[i];
    state.totalAttempted++;

    const progressPercent = Math.round(
      ((i + 1) / exercises.length) * 100
    );
    console.log(
      `[${progressPercent}%] (${i + 1}/${exercises.length}) Generating: ${exercise.topic} - ${exercise.exerciseName} (${exercise.difficulty})`
    );

    const result = await generateSingleExercise(exercise);

    if (result.success) {
      state.totalSuccessful++;
      console.log(`  ✅ Success\n`);
    } else {
      state.totalFailed++;
      state.failedExercises.push({
        topic: exercise.topic,
        difficulty: exercise.difficulty,
        error: result.error || "Unknown error",
      });
      console.log(`  ❌ Failed: ${result.error}\n`);
    }

    state.lastCompletedIndex = i;

    // Save checkpoint every 10 exercises
    if ((i + 1) % 10 === 0) {
      await saveCheckpoint(state);
      console.log(`💾 Checkpoint saved at ${i + 1}/${exercises.length}\n`);
    }

    // Add a small delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Final checkpoint
  await saveCheckpoint(state);

  // Print summary
  console.log("\n" + "=".repeat(60));
  console.log("📊 Generation Summary");
  console.log("=".repeat(60));
  console.log(`Total Attempted: ${state.totalAttempted}`);
  console.log(`Successfully Generated: ${state.totalSuccessful}`);
  console.log(`Failed: ${state.totalFailed}`);
  console.log(`Success Rate: ${((state.totalSuccessful / state.totalAttempted) * 100).toFixed(1)}%`);

  if (state.failedExercises.length > 0) {
    console.log("\n❌ Failed Exercises:");
    state.failedExercises.slice(0, 10).forEach((failed) => {
      console.log(`  • ${failed.topic} (${failed.difficulty}): ${failed.error}`);
    });
    if (state.failedExercises.length > 10) {
      console.log(`  ... and ${state.failedExercises.length - 10} more`);
    }
  }

  console.log("\n" + "=".repeat(60));
  if (DRY_RUN) {
    console.log("✅ Dry-run completed successfully!");
  } else if (state.totalFailed === 0) {
    console.log("✅ All exercises generated successfully!");
  } else {
    console.log(
      `⚠️  Generation completed with ${state.totalFailed} failures. Review above for details.`
    );
  }
  console.log("=".repeat(60));
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
