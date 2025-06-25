import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      exclude: [...coverageConfigDefaults.exclude, "src/index.tsx"],
      reporter: "text",
      thresholds: { 100: true },
    },
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
  },
});
