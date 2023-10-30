import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ArticleHistoryRecord from "./ArticleHistoryRecord";

const setArticle = {
  mock: () => {
    console.log("setArticle");
  },
  calls: 0,
};

setArticle.mock = () => {
  setArticle.calls++;
  console.log("setArticle");
};

describe("ArticleHistoryRecord has been rendered", () => {
  it("The ArticleHistoryRecord has copyButton and URL section", () => {
    render(
      <ArticleHistoryRecord
        articleUrl="https://article-sum-adi.netlify.app/"
        onClickHandler={setArticle.mock}
      />
    );
    const articleHistoryContainer = screen.getByTestId("articleHistory");
    const copyButton = articleHistoryContainer.querySelector("copy_btn");
    const articleUrl = articleHistoryContainer.querySelector("p");

    expect(copyButton && articleUrl).toBeDefined();
  });

  it("The article URL is equal with property", () => {
    render(
      <ArticleHistoryRecord
        articleUrl="https://article-sum-adi.netlify.app/"
        onClickHandler={setArticle.mock}
      />
    );
    const articleHistoryContainer = screen.getByTestId("articleHistory");
    const articleUrl = articleHistoryContainer.querySelector("p");

    expect(articleUrl?.textContent).toBe(
      "https://article-sum-adi.netlify.app/"
    );
  });

  it("Call setArticle after click in the URL", async () => {
    render(
      <ArticleHistoryRecord
        articleUrl="https://article-sum-adi.netlify.app/"
        onClickHandler={setArticle.mock}
      />
    );
    const articleHistoryContainer = screen.getByTestId("articleHistory");
    const articleUrl = articleHistoryContainer.querySelector("p");
    if (articleUrl) {
      await fireEvent.click(articleUrl);
    }

    expect(setArticle.calls).toBeGreaterThan(0);
  });
});
