import { render, screen, fireEvent } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import CopyButton from "./CopyButton";

beforeAll(() => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () => Promise.resolve(),
    },
  });
});

describe("CopyButton has been rendered", () => {
  it("The CopyButton has an COPY icon", () => {
    render(<CopyButton articleUrl="https://article-sum-adi.netlify.app/" />);
    const copyButton = screen.getByTestId("copyButton");
    const copyIcon = copyButton.querySelector("img");

    expect(copyIcon?.getAttribute("src")).toBe("/src/assets/copy.svg");
  });

  it("The CopyButton has an TICK icon after click", () => {
    render(<CopyButton articleUrl="https://article-sum-adi.netlify.app/" />);
    const copyButton = screen.getByTestId("copyButton");
    const copyIcon = copyButton.querySelector("img");

    fireEvent.click(copyButton);

    expect(copyIcon?.getAttribute("src")).toBe("/src/assets/tick.svg");
  });
});
