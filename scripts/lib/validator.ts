interface TestCase {
  description: string;
  assertion: string;
}

interface ExerciseValidation {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

const ALLOWED_MATCHERS = [
  "toBe",
  "toEqual",
  "toStrictEqual",
  "toBeTruthy",
  "toBeFalsy",
  "toContain",
  "toHaveLength",
  "toBeNull",
  "toBeUndefined",
  "toThrow",
];

const FORBIDDEN_MATCHERS = [
  ".not",
  "toHaveProperty",
  "toBeGreaterThan",
  "toBeGreaterThanOrEqual",
  "toBeLessThan",
  "toBeLessThanOrEqual",
  "toBeNaN",
  "toBeInstanceOf",
  "toMatch",
  "toHaveBeenCalled",
  "toHaveBeenCalledWith",
  "toBeDefined",
  "toContainEqual",
  "toMatchObject",
];

export function validateTestMatchers(assertion: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check for forbidden matchers
  for (const forbidden of FORBIDDEN_MATCHERS) {
    if (assertion.includes(forbidden)) {
      errors.push(`Forbidden matcher found: ${forbidden}`);
    }
  }

  // Check that at least one allowed matcher is present
  const hasAllowedMatcher = ALLOWED_MATCHERS.some((matcher) =>
    assertion.includes(matcher)
  );
  if (!hasAllowedMatcher) {
    errors.push(
      `No valid matcher found. Must use one of: ${ALLOWED_MATCHERS.join(", ")}`
    );
  }

  // Check for basic syntax errors
  if (!assertion.includes("expect(")) {
    errors.push("Assertion must contain expect() call");
  }

  // Check for unclosed parentheses
  const openParens = (assertion.match(/\(/g) || []).length;
  const closeParens = (assertion.match(/\)/g) || []).length;
  if (openParens !== closeParens) {
    errors.push("Unbalanced parentheses in assertion");
  }

  // Check that assertion ends with a matcher call
  if (!assertion.trim().endsWith(")")) {
    errors.push("Assertion must end with a complete matcher call");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateExercise(exercise: any): ExerciseValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Validate required fields
  if (!exercise.slug || typeof exercise.slug !== "string") {
    errors.push("Missing or invalid slug (must be non-empty string)");
  } else if (!/^[a-z0-9-]+$/.test(exercise.slug)) {
    errors.push("Slug must only contain lowercase letters, numbers, and hyphens");
  }

  if (!exercise.title || typeof exercise.title !== "string") {
    errors.push("Missing or invalid title (must be non-empty string)");
  }

  if (!exercise.description || typeof exercise.description !== "string") {
    errors.push("Missing or invalid description (must be non-empty string)");
  }

  if (
    !exercise.initialCode ||
    typeof exercise.initialCode !== "string"
  ) {
    errors.push("Missing or invalid initialCode (must be non-empty string)");
  } else if (exercise.initialCode.trim().length === 0) {
    errors.push("initialCode cannot be empty");
  }

  if (!exercise.solution || typeof exercise.solution !== "string") {
    errors.push("Missing or invalid solution (must be non-empty string)");
  } else if (exercise.solution.trim().length === 0) {
    errors.push("solution cannot be empty");
  }

  // Validate tests array
  if (!Array.isArray(exercise.tests)) {
    errors.push("tests must be an array");
  } else {
    if (exercise.tests.length === 0) {
      errors.push("tests array cannot be empty (minimum 1 test required)");
    }
    if (exercise.tests.length > 10) {
      warnings.push(
        `tests array has ${exercise.tests.length} items (recommended max: 5-6)`
      );
    }

    exercise.tests.forEach((test: TestCase, index: number) => {
      if (!test.description || typeof test.description !== "string") {
        errors.push(`tests[${index}].description is invalid`);
      }
      if (!test.assertion || typeof test.assertion !== "string") {
        errors.push(`tests[${index}].assertion is invalid`);
      } else {
        const matcherValidation = validateTestMatchers(test.assertion);
        if (!matcherValidation.valid) {
          errors.push(`tests[${index}] matcher error: ${matcherValidation.errors.join("; ")}`);
        }
      }
    });
  }

  // Validate hints array
  if (!Array.isArray(exercise.hints)) {
    errors.push("hints must be an array");
  } else {
    if (exercise.hints.length === 0) {
      warnings.push("hints array is empty (consider adding 2-3 helpful hints)");
    }
    exercise.hints.forEach((hint: any, index: number) => {
      if (typeof hint !== "string" || hint.trim().length === 0) {
        errors.push(`hints[${index}] must be a non-empty string`);
      }
    });
  }

  // Validate usageExample
  if (!exercise.usageExample || typeof exercise.usageExample !== "string") {
    errors.push("Missing or invalid usageExample (must be non-empty string)");
  } else if (exercise.usageExample.trim().length === 0) {
    errors.push("usageExample cannot be empty");
  }

  // Length warnings
  if (exercise.description && exercise.description.length < 30) {
    warnings.push("description is quite short (consider 30+ characters)");
  }

  if (exercise.title && exercise.title.length > 80) {
    warnings.push("title is quite long (consider keeping under 80 characters)");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

export function formatValidationReport(
  exercise: any,
  validation: ExerciseValidation
): string {
  const lines: string[] = [];

  lines.push(`\n📋 Validation Report: ${exercise.slug || "unknown"}`);
  lines.push("=".repeat(50));

  if (validation.valid) {
    lines.push("✅ VALID - Exercise meets all requirements");
  } else {
    lines.push("❌ INVALID - Errors found:");
    validation.errors.forEach((error) => {
      lines.push(`  • ${error}`);
    });
  }

  if (validation.warnings.length > 0) {
    lines.push("\n⚠️  Warnings:");
    validation.warnings.forEach((warning) => {
      lines.push(`  • ${warning}`);
    });
  }

  return lines.join("\n");
}
