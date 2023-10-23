import { describe, expect, it } from "vitest";
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "../../utils/testUtils";

import { Provider } from "react-redux";
import { store } from "../../services/store";

import SearchArticle from "./SearchArticle";

describe("SearchArticle has been rendered", () => {
  it("SearchArticle contained wrapper div with form, input, icon and button", () => {
    render(
      <Provider store={store}>
        <SearchArticle />
      </Provider>
    );
    const searchArticle = screen.getByTestId("searchArticle");
    const searchForm = searchArticle.querySelector("form");
    const copyIcon = searchForm?.querySelector("img");
    const urlInput = searchForm?.querySelector("input")?.getAttribute("type");
    const submitButton = searchForm
      ?.querySelector("button")
      ?.getAttribute("type");

    expect(searchArticle && searchForm && copyIcon).toBeTruthy();
    expect(urlInput).toBe("url");
    expect(submitButton).toBe("submit");
  });

  it("Displays the summary after form submission", async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchArticle />
      </Provider>
    );
    userEvent.type(
      getByPlaceholderText("Eneter article URL"),
      "https://wheaterapp-adi.netlify.app/"
    );
    userEvent.click(screen.getByTestId("submitSearch"));

    if (screen.queryByTestId("loading")) {
      await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
    }

    expect(screen.getByTestId("articleSummary")).toBeDefined();
  });

  it("Display the error if summary was not generated", async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchArticle />
      </Provider>
    );
    userEvent.type(
      getByPlaceholderText("Eneter article URL"),
      "https://wheaterapp-adi.netlify.app"
    );
    userEvent.click(screen.getByTestId("submitSearch"));

    if (screen.queryByTestId("loading")) {
      await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
    }

    expect(screen.findByTestId("error")).toBeDefined();
  });
});
