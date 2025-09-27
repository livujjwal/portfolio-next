import type { Options } from "prettier";
import * as prettierPluginTailwindcss from "prettier-plugin-tailwindcss";

const config: Options = {
  printWidth: 80,
  plugins: [prettierPluginTailwindcss],
  tailwindConfig: "./tailwind.config.js",
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
};

export default config;
