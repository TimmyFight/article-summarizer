import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SummarizerTemplate from "./SummarizerTemplate";

describe("SummarizerTemplate has been rendered", () => {
  it("The messege has been renderd when article has not been passed", () => {
    render(<SummarizerTemplate />);
    const container = screen.getByTestId("summarizerContainer");
    expect(container.textContent).toBe(
      "Article was not found. Try to search by URL."
    );
  });
  it("The organisms have been rendered when article is available", () => {
    render(<SummarizerTemplate article="Example article" />);
    const mainHeader = screen.getByTestId("mainHeader");
    const summarizerBody = screen.getByTestId("summarizerBody");
    expect(mainHeader && summarizerBody).toBeTruthy;
  });
});
