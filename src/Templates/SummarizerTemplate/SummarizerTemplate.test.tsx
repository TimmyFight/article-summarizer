import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Provider } from "react-redux";
import { store } from "../../services/store";

import SummarizerTemplate from "./SummarizerTemplate";

describe("SummarizerTemplate has been rendered", () => {
  it("The organisms have been rendered when article is available", () => {
    render(
      <Provider store={store}>
        <SummarizerTemplate />
      </Provider>
    );
    const mainHeader = screen.getByTestId("mainHeader");
    const summarizerBody = screen.getByTestId("summarizerBody");
    expect(mainHeader && summarizerBody).toBeTruthy();
  });
});
