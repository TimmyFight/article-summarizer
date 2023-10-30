import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Error from "./Error";

describe("Error has been rendered", () => {
  it("The Error has an paraghraph with message", () => {
    render(<Error />);
    const errorContainer = screen.getByTestId("error");

    expect(errorContainer?.textContent?.length).toBeGreaterThan(0);
  });
});
