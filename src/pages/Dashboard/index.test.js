import { render, screen } from "@testing-library/react";
import Dashboard from "./index";

test("Any text is not a render in the page", () => {
  render(<Dashboard />);
  expect(null).not.toBeInTheDocument();
});
