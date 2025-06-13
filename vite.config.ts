import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

let base: string | undefined;
if (process.env.GITHUB_REPOSITORY) {
  base = process.env.GITHUB_REPOSITORY.slice(
    process.env.GITHUB_REPOSITORY.indexOf("/"),
  );
}

export default defineConfig({
  base,
  plugins: [react()],
});
