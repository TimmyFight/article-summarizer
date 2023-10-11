import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import MainHeader from "./MainHeader";

describe("MainHeader has been rendered", () => {
  it("The MainHeader contained logo", () => {
    render(<MainHeader />);
    const mainHeader = screen.getByTestId("mainHeader");
    expect(mainHeader.querySelector("img")).not.toBe(null);
  });
});
