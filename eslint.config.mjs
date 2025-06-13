// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"

export default withNuxt(
  // Your custom configs here
  eslintPluginPrettier,
  {
    rules: {
      "vue/no-multiple-template-root": "off",
      "vue/multi-word-component-names": "off",
    },
  },
)
