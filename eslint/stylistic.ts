/*
  ESLint Stylistic
  Documentation: https://eslint.style/rules
*/

import stylistic from "@stylistic/eslint-plugin"
import { defineConfig } from "eslint/config"

export default defineConfig({
  name: "@vldx-tech/eslint-config/stylistic",
  extends: [
    stylistic.configs.customize({
      arrowParens: true,
      braceStyle: "1tbs",
    }),
  ],
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    "@stylistic/array-bracket-newline": ["error", "consistent"],
    "@stylistic/array-element-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing": "error",
    "@stylistic/implicit-arrow-linebreak": "error",
    "@stylistic/line-comment-position": "error",
    "@stylistic/object-curly-newline": "error",
    "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: "avoidEscape", avoidEscape: true }],
    "@stylistic/switch-colon-spacing": "error",
  },
})
