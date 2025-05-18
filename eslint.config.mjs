// eslint.config.mjs
import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  // Base ESLint recommended configuration
  eslint.configs.recommended,

  // Global settings
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
        project: "./tsconfig.json"
      }
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: {}
      }
    }
  },

  // TypeScript configurations
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs["recommended-requiring-type-checking"].rules,
      ...tseslint.configs.strict.rules,
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error"
    }
  },

  // React configurations
  {
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // We use TypeScript for props validation
      "react/jsx-uses-react": "off" // Not needed with React 17+
    }
  },

  // Import rules
  {
    plugins: {
      import: importPlugin
    },
    rules: {
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error"
    }
  },

  // Common rules for all files
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      eqeqeq: "error"
    }
  },

  // Override rules for specific file patterns
  {
    files: ["**/*.tsx", "commitlint.config.mjs"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off" // Often inferred in React components
    }
  },

  // Ignore patterns
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "public/**", "next.config.js", "src/components/**"]
  }
];

