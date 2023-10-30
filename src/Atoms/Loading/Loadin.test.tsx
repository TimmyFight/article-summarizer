import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "./Loading";

describe("Loading has been rendered", () => {
  it("The Loading has an image with loading animation", () => {
    render(<Loading />);
    const loading = screen.getByTestId("loading");

    expect(loading?.getAttribute("src")).toBe("/src/assets/loader.svg");
  });
});
