import { defineConfig } from "eslint/config"
import vldxConfigs from "./eslint/index.ts"

export default defineConfig({
  ignores: [".nuxt/**", ".output/**", "node_modules/**", "dist/**"],
  extends: [vldxConfigs.configs.base, vldxConfigs.rules.vue],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
})
