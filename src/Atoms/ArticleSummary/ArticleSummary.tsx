interface ArticleSummaryProperties {
  summary: string;
}

const ArticleSummary = ({ summary }: ArticleSummaryProperties) => {
  return <div data-testId="articleSummary">{summary}</div>;
};

export default ArticleSummary;
