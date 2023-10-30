import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ArticleSummary from "./ArticleSummary";

describe("ArticleSummary has been rendered", () => {
  it("The ArticleSummary has summary related to property value", () => {
    render(<ArticleSummary summary="Test Summary" />);
    const articleSummaryContainer = screen.getByTestId("articleSummary");
    const articleSummary = articleSummaryContainer.querySelector("p");

    expect(articleSummary?.textContent).toBe("Test Summary");
  });
});
