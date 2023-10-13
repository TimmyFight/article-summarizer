import { useState, useEffect, FormEvent } from "react";
import { useLazyGetSummaryByUrlQuery } from "../../services/article";

import { linkIcon } from "../../assets";

const SearchArticle = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummaryByUrl, { error, isFetching }] =
    useLazyGetSummaryByUrlQuery();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await getSummaryByUrl({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      setArticle(newArticle);
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
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
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
          &#10148;
        </button>
      </form>
    </div>
  );
};

export default SearchArticle;
