import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  globalIgnores(["dist"]),
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
