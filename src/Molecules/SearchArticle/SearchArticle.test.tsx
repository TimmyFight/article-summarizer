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
    const { getByPlaceholderText, getByText } = render(<SearchArticle />);
    fireEvent.change(getByPlaceholderText("Eneter article URL"), {
      target: { value: "https://test.com" },
    });
    fireEvent.click(getByText("&#10148;"));

    await expect(getSummaryByUrl).toHaveBeenCalledWith({
      articleUrl: "https://test.com",
    });
  });
});
