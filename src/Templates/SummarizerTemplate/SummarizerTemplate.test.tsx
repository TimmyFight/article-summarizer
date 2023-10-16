import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Provider } from "react-redux";
import { store } from "../../services/store";

import SummarizerTemplate from "./SummarizerTemplate";

describe("SummarizerTemplate has been rendered", () => {
  it("The messege has been renderd when article has not been passed", () => {
    render(
      <Provider store={store}>
        <SummarizerTemplate />
      </Provider>
    );
    const container = screen.getByTestId("summarizerContainer");
    expect(container.textContent).toBe(
      "Article was not found. Try to search by URL."
    );
  });
  it("The organisms have been rendered when article is available", () => {
    render(
      <Provider store={store}>
        <SummarizerTemplate article="Example article" />
      </Provider>
    );
    const mainHeader = screen.getByTestId("mainHeader");
    const summarizerBody = screen.getByTestId("summarizerBody");
    expect(mainHeader && summarizerBody).toBeTruthy;
  });
});
