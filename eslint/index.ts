import { defineConfig } from "eslint/config"

import js from "./js.ts"
import stylistic from "./stylistic.js"
import typescript from "./typescript.js"
import vue from "./vue.js"

export default {
  /**
   * Individual ESLint rule configs
   */
  rules: {
    js,
    stylistic,
    typescript,
    vue,
  },

  /**
   * ESLint config presets
   */
  configs: {
    /**
     * For vanilla JS projects
     *
     * @example
     * import { defineConfig } from "eslint/config"
     * import vldxConfigs from '@vldx-tech/eslint-config'
     *
     * export default defineConfig({
     *   extends: [
     *     vldxConfigs.configs.base,
     *   ],
     * })
     */
    base: defineConfig({
      extends: [js, typescript, stylistic],
    }),
    nuxt: {
      /**
       * Predefined configs for Nuxt + Nuxt ESLint projects
       *
       * @example
       * import vldxConfigs from '@vldx-tech/eslint-config'
       *
       * export default withNuxt(
       *   // Appended rules
       *   vldxConfigs.configs.nuxt.append
       * )
       *   .prepend(
       *     // Prepended rules
       *     vldxConfigs.configs.nuxt.prepend
       *   )
       */
      append: defineConfig({
        extends: [stylistic],
      }),
      /**
       * Predefined configs for Nuxt + Nuxt ESLint projects
       *
       * @example
       * import vldxConfigs from '@vldx-tech/eslint-config'
       *
       * export default withNuxt(
       *   // Appended rules
       *   vldxConfigs.configs.nuxt.append
       * )
       *   .prepend(
       *     // Prepended rules
       *     vldxConfigs.configs.nuxt.prepend
       *   )
       */
      prepend: defineConfig({
        extends: [js, typescript, vue],
      }),
    },
  },
}
