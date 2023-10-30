import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MainHeader from "./Navigation";

describe("Navigation has been rendered", () => {
  it("The Navigation has an logo image", () => {
    render(<MainHeader />);
    const navigationContainer = screen.getByTestId("navigation");
    const logo = navigationContainer.querySelector("img");

    expect(logo?.getAttribute("src")).toBe("/src/assets/logo.svg");
  });
});
