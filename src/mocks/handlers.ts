import { rest } from "msw";

export const shorterArticle = { summary: "Test summary" };

export const handlers = [
  rest.get(
    "https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https://wheaterapp-adi.netlify.app&length=3",
    (req, res, ctx) => {
      return res(ctx.delay(1000), ctx.json({ summary: "Test summary" }));
    }
  ),
];
