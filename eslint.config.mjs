import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
  ...eslintPluginAstro.configs["flat/recommended"],
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.mjs"],
  })),
  {
    files: ["**/*.ts", "**/*.mjs"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  eslintConfigPrettier,
];
