import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Provider } from "react-redux";
import { store } from "../../services/store";

import SearchArticle from "./SearchArticle";

const getSummaryByUrl = vi
  .fn()
  .mockResolvedValue({ data: { summary: "Test summary" } });

vi.mock("../../services/article", () => {
  return {
    articleApi: {
      useLazyGetSummaryByUrlQuery: () => [
        getSummaryByUrl,
        { error: null, isFetching: false },
      ],
    },
  };
});

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

  it("Submit form has been fired", async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchArticle />
      </Provider>
    );
    fireEvent.change(getByPlaceholderText("Eneter article URL"), {
      target: { value: "https://wheaterapp-adi.netlify.app/" },
    });
    fireEvent.click(screen.getByTestId("submitSearch"));

    await expect(getSummaryByUrl).toHaveBeenCalledWith({
      articleUrl: "https://wheaterapp-adi.netlify.app/",
    });
  });

  it("Displays the summary after form submission", async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchArticle />
      </Provider>
    );
    fireEvent.change(getByPlaceholderText("Eneter article URL"), {
      target: { value: "https://wheaterapp-adi.netlify.app/" },
    });
    fireEvent.click(screen.getByTestId("submitSearch"));

    await expect(getSummaryByUrl).toHaveBeenCalledWith({
      articleUrl: "https://wheaterapp-adi.netlify.app/",
    });

    expect(screen.getByText("Test summary")).toBeTruthy();
  });
});
