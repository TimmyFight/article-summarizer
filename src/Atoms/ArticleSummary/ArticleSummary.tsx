interface ArticleSummaryProperties {
  summary: string;
}

const ArticleSummary = ({ summary }: ArticleSummaryProperties) => {
  return <div data-testid="articleSummary">{summary}</div>;
};

export default ArticleSummary;
