import fs from "fs";
import path from "path";

interface ExerciseData {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  initialCode: string;
  solution: string;
  tests: Array<{
    description: string;
    assertion: string;
  }>;
  hints: string[];
  usageExample: string;
}

export function generateExerciseTypeScript(exercise: ExerciseData): string {
  const escapedTitle = exercise.title.replace(/'/g, "\\'");
  const escapedDescription = exercise.description.replace(/'/g, "\\'");
  const escapedInitialCode = exercise.initialCode.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  const escapedSolution = exercise.solution.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  const escapedUsageExample = exercise.usageExample.replace(/\\/g, "\\\\").replace(/'/g, "\\'");

  const testsCode = exercise.tests
    .map((test) => {
      const escapedTestDesc = test.description.replace(/'/g, "\\'");
      const escapedAssertion = test.assertion.replace(/'/g, "\\'");
      return `    {\n      description: '${escapedTestDesc}',\n      assertion: '${escapedAssertion}',\n    }`;
    })
    .join(",\n");

  const hintsCode = exercise.hints
    .map((hint) => {
      const escapedHint = hint.replace(/'/g, "\\'");
      return `    '${escapedHint}'`;
    })
    .join(",\n");

  const typeScriptCode = `import { Exercise } from '@/shared/types/exercises';

const exercise: Exercise = {
  slug: '${exercise.slug}',
  title: '${escapedTitle}',
  description: '${escapedDescription}',
  category: '${exercise.category}',
  difficulty: '${exercise.difficulty}',
  builtIn: true,
  initialCode: '${escapedInitialCode}',
  solution: '${escapedSolution}',
  tests: [
${testsCode}
  ],
  hints: [
${hintsCode}
  ],
  usageExample: '${escapedUsageExample}',
  tags: ['${exercise.category}', '${exercise.difficulty}'],
};

export default exercise;
`;

  return typeScriptCode;
}

export async function writeExerciseFile(
  exercise: ExerciseData,
  basePath: string
): Promise<{ success: boolean; path: string; error?: string }> {
  try {
    // Determine directory based on difficulty level
    const difficultyPath = exercise.difficulty; // beginner, intermediate, advanced
    const categoryPath = exercise.category.toLowerCase().replace(/\s+/g, "-");

    const dirPath = path.join(
      basePath,
      "src/features/exercises/infrastructure/data",
      categoryPath,
      difficultyPath
    );

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, `${exercise.slug}.ts`);

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return {
        success: false,
        path: filePath,
        error: `File already exists: ${filePath}`,
      };
    }

    // Generate TypeScript code
    const typeScriptCode = generateExerciseTypeScript(exercise);

    // Write file
    fs.writeFileSync(filePath, typeScriptCode, "utf-8");

    return {
      success: true,
      path: filePath,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return {
      success: false,
      path: "",
      error: `Failed to write exercise file: ${errorMessage}`,
    };
  }
}

export async function ensureDirectoryStructure(basePath: string): Promise<void> {
  const categories = [
    "variables",
    "data-types",
    "operators",
    "control-flow",
    "functions",
    "arrays",
    "objects",
    "strings",
    "regular-expressions",
    "destructuring",
    "spread-operator",
    "loops",
    "type-coercion",
    "closures",
    "hoisting",
    "prototypes",
    "this-keyword",
    "async-programming",
    "promises",
    "async-await",
    "error-handling",
    "modules",
    "scope",
    "dom-manipulation",
    "event-handling",
    "window-object",
    "local-storage",
    "json",
    "fetch-api",
    "testing",
    "debugging",
    "performance",
    "security",
    "best-practices",
  ];

  for (const category of categories) {
    for (const difficulty of ["beginner", "intermediate", "advanced"]) {
      const dirPath = path.join(
        basePath,
        "src/features/exercises/infrastructure/data",
        category,
        difficulty
      );
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    }
  }
}

export function getExerciseWriteStats(): {
  created: number;
  skipped: number;
  errors: number;
} {
  return {
    created: 0,
    skipped: 0,
    errors: 0,
  };
}
