import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Provider } from "react-redux";
import { store } from "../../services/store";

import SummarizerBody from "./SummarizerBody";

describe("SummarizerBody has been rendered", () => {
  it("The SummarizerBody has section container", () => {
    render(
      <Provider store={store}>
        <SummarizerBody />
      </Provider>
    );
    const summarizerBody = screen.getByTestId("summarizerBody");
    expect(summarizerBody).toBeTruthy();
  });
});
