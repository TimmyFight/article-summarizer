import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SummarizerTemplate from "./SummarizerTemplate";

describe("SummarizerTemplate has been rendered", () => {
  it("The container div is rendered without article", () => {
    render(<SummarizerTemplate />);
    const container = screen.getByTestId("summarizerContainer");
    expect(container.textContent).toBe(
      "Article was not found. Try to search by URL."
    );
  });
  it("The container div is rendered with article", () => {
    render(<SummarizerTemplate article="Example article" />);
    const container = screen.getByTestId("summarizerContainer");
    expect(container.textContent).toBe("Example article");
  });
});
