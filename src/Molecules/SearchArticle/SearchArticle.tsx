import { useState, useEffect, FormEvent } from "react";
import { useLazyGetSummaryByUrlQuery } from "../../services/article";

import { linkIcon } from "../../assets";
import ArticleSummary from "../../Atoms/ArticleSummary/ArticleSummary";
import ArticleHistoryRecord from "../../Atoms/ArticleHistoryRecord/ArticleHistoryRecord";
import Loading from "../../Atoms/Loading/Loading";
import Error from "../../Atoms/Error/Error";

interface Article {
  url: string;
  summary: string;
}

const SearchArticle = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [lastArticles, setLastArticles] = useState<[] | Article[]>([]);

  useEffect(() => {
    const lastArticlesStoraged = localStorage.getItem("lastArticles");
    if (lastArticlesStoraged) {
      setLastArticles(JSON.parse(lastArticlesStoraged));
    }
  }, []);

  const [getSummaryByUrl, { error, isFetching }] =
    useLazyGetSummaryByUrlQuery();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, error } = await getSummaryByUrl({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedLastArticles = [newArticle, ...lastArticles];

      if (updatedLastArticles.length > 5) {
        updatedLastArticles.pop();
      }

      setArticle(newArticle);
      setLastArticles(updatedLastArticles);
      localStorage.setItem("lastArticles", JSON.stringify(updatedLastArticles));
    }

    if (error) {
      setArticle({ url: "", summary: "" });
    }
  };

  return (
    <div className="flex flex-col w-full gap-2" data-testid="searchArticle">
      <form
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}>
        <img
          src={linkIcon}
          alt="Link Icon"
          className="absolute left-0 my-2 ml-3 w-5"
        />
        <input
          type="url"
          placeholder="Eneter article URL"
          value={article.url}
          onChange={(event) => {
            setArticle({
              ...article,
              url: event.target.value,
            });
          }}
          required
          className="url_input peer"
        />
        <button
          data-testid="submitSearch"
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
          &#10148;
        </button>
      </form>
      <div className="flex flex-col gap-1 overflow-y-auto max-h-24">
        {lastArticles?.map((article, id) => {
          return (
            <ArticleHistoryRecord
              key={`${id}_${article.url}`}
              articleUrl={article.url}
              onClickHandler={() => {
                setArticle(article);
              }}
            />
          );
        })}
      </div>
      <div
        className="my-10 max-w-full flex justify-center items-center"
        data-testid="articleSummary">
        {isFetching && <Loading />}
        {error && !article?.summary && <Error />}
        {!isFetching && article.summary && (
          <ArticleSummary summary={article.summary} />
        )}
      </div>
    </div>
  );
};

export default SearchArticle;
