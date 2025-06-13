import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "./App";

test("counter button increments the count", async () => {
  const screen = render(<App />);
  await screen.getByRole("button", { name: "count is 0" }).click();
  await expect.element(screen.getByText("count is 1")).toBeVisible();
});
