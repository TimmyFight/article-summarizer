import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SummaryGetOptions {
  articleUrl: string;
}

interface SummaryGetResult {
  summary: string;
}

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_ARTICLE_HOST;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", rapidApiHost);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummaryByUrl: builder.query<SummaryGetResult, SummaryGetOptions>({
      query: ({ articleUrl }) =>
        `/summarize?url=${encodeURIComponent(articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryByUrlQuery } = articleApi;
