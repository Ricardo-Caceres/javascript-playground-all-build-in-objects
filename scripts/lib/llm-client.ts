import Anthropic from "@anthropic-ai/sdk";

interface ExerciseGenerationRequest {
  topicSlug: string;
  topicName: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  exerciseName: string;
  description: string;
  exampleExercise: string;
}

interface GeneratedExercise {
  slug: string;
  title: string;
  description: string;
  initialCode: string;
  solution: string;
  tests: Array<{
    description: string;
    assertion: string;
  }>;
  hints: string[];
  usageExample: string;
}

export async function generateExerciseWithLLM(
  request: ExerciseGenerationRequest
): Promise<GeneratedExercise> {
  const client = new Anthropic();

  const prompt = buildPrompt(request);

  const message = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 3000,
    thinking: {
      type: "enabled",
      budget_tokens: 5000,
    },
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const responseText =
    message.content[0].type === "text" ? message.content[0].text : "";

  const jsonMatch = responseText.match(/<json>([\s\S]*?)<\/json>/);
  if (!jsonMatch) {
    throw new Error("No valid JSON found in LLM response");
  }

  const exercise: GeneratedExercise = JSON.parse(jsonMatch[1]);
  return exercise;
}

function buildPrompt(request: ExerciseGenerationRequest): string {
  return `You are a JavaScript/TypeScript exercise generator for the JavaScript Roadmap learning path.

Topic: ${request.topicName}
Topic Slug: ${request.topicSlug}
Difficulty Level: ${request.difficulty}
Exercise Name: ${request.exerciseName}

Your task: Generate a single, well-structured ${request.difficulty}-level coding exercise for "${request.topicName}".

CRITICAL CONSTRAINTS:
1. Test assertions MUST use ONLY these matchers: toBe, toEqual, toStrictEqual, toBeTruthy, toBeFalsy, toContain, toHaveLength, toBeNull, toBeUndefined, toThrow
2. Do NOT use forbidden matchers: .not, toHaveProperty, toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBeNaN, toBeInstanceOf, toMatch, toHaveBeenCalled, toHaveBeenCalledWith, etc.
3. Each test assertion string must be VALID JavaScript (no Babel transpilation applied)
4. Keep exercises focused on ONE core concept
5. Use clear, learner-friendly language
6. Provide 2-3 tests covering normal cases and edge cases

EXERCISE QUALITY STANDARDS:
- Initial code should be incomplete but runnable (with placeholder or TODO)
- Solution should be complete, well-commented for learning
- Tests should verify both correctness and edge cases
- Hints should guide toward the solution without giving it away
- Usage example should show practical application

REFERENCE EXAMPLE FOR ${request.difficulty} LEVEL:
${request.exampleExercise}

Generate a NEW exercise following the same structure and quality. The exercise should:
1. Focus on "${request.description}"
2. Be appropriate for ${request.difficulty} level developers
3. Test understanding of the core concept
4. Include 2-3 practical test cases

Respond with ONLY valid JSON (no markdown, no extra text) wrapped in <json>...</json> tags:

<json>
{
  "slug": "unique-slug-for-this-exercise",
  "title": "Clear, descriptive title",
  "description": "2-3 sentence explanation of what the exercise teaches",
  "initialCode": "const myFunction = (params) => {\\n  // TODO: implement this\\n};",
  "solution": "const myFunction = (params) => {\\n  // Detailed implementation with comments\\n};",
  "tests": [
    {
      "description": "Test case 1 description",
      "assertion": "expect(myFunction(value)).toBe(expectedResult)"
    },
    {
      "description": "Test case 2 description",
      "assertion": "expect(myFunction(value)).toEqual(expectedResult)"
    }
  ],
  "hints": [
    "Hint 1 guiding toward solution",
    "Hint 2 with more specific guidance"
  ],
  "usageExample": "// Real-world usage\\nconst result = myFunction(input);\\nconsole.log(result); // output explanation"
}
</json>`;
}

export async function validateLLMResponse(
  response: any
): Promise<{ valid: boolean; errors: string[] }> {
  const errors: string[] = [];

  if (!response.slug || typeof response.slug !== "string") {
    errors.push("Missing or invalid slug");
  }
  if (!response.title || typeof response.title !== "string") {
    errors.push("Missing or invalid title");
  }
  if (!response.description || typeof response.description !== "string") {
    errors.push("Missing or invalid description");
  }
  if (
    !response.initialCode ||
    typeof response.initialCode !== "string"
  ) {
    errors.push("Missing or invalid initialCode");
  }
  if (!response.solution || typeof response.solution !== "string") {
    errors.push("Missing or invalid solution");
  }
  if (!Array.isArray(response.tests) || response.tests.length === 0) {
    errors.push("Missing or invalid tests array (minimum 1 test required)");
  } else {
    response.tests.forEach((test: any, index: number) => {
      if (!test.description || typeof test.description !== "string") {
        errors.push(`Test ${index}: Missing or invalid description`);
      }
      if (!test.assertion || typeof test.assertion !== "string") {
        errors.push(`Test ${index}: Missing or invalid assertion`);
      }
    });
  }
  if (!Array.isArray(response.hints)) {
    errors.push("Missing or invalid hints array");
  }
  if (!response.usageExample || typeof response.usageExample !== "string") {
    errors.push("Missing or invalid usageExample");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
