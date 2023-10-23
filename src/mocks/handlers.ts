import { graphql, rest } from "msw";

export const shorterArticle = { summary: "Test summary" };

const getSummaryByUrl = graphql.link(
  "https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https://theadify.netlify.app///&length=3"
);
// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get(
    "https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https://theadify.netlify.app///&length=3",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(shorterArticle.summary));
    }
  ),

  getSummaryByUrl.query("get", (req, res, ctx) => {
    return res(
      ctx.data({
        shorterArticle,
      })
    );
  }),
];
