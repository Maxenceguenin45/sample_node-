import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  },
  {
    ignores: ["**/*.spec.js"] // This will ignore linting for spec files
  },
  {
    // Override configuration for test files
    files: ["**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...jestPlugin.environments.globals
      }
    },
    plugins: [jestPlugin],
    extends: [jestPlugin.configs.recommended]
  },
  pluginJs.configs.recommended
];