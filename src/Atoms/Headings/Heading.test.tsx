import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Headings from "./Headings";

describe("Headings has been rendered", () => {
  it("The Headings rendered with default properties", () => {
    render(<Headings />);
    const heading = screen.getByTestId("heading");
    expect(heading.tagName).toBe("H1");
    expect(heading.textContent).toBe("");
  });
  it("The Headings rendered with a specific properties", () => {
    render(
      <Headings level={3}>
        <>Example h3</>
      </Headings>
    );
    const heading = screen.getByTestId("heading");
    expect(heading.tagName).toBe("H3");
    expect(heading.textContent).toBe("Example h3");
  });
});
