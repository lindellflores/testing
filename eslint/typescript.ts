import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig({
  name: "@vldx-tech/eslint-config/typescript",
  extends: [
    tseslint.configs.strict,
    tseslint.configs.stylistic,
  ],
  rules: {
    "@typescript-eslint/class-methods-use-this": "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/max-params": ["error", { max: 3 }],
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true }],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
  },
})
