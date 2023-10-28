interface ArticleSummaryProperties {
  summary: string;
}

const ArticleSummary = ({ summary }: ArticleSummaryProperties) => {
  return (
    <div
      className="flex justify-center flex-col gap-3"
      data-testid="articleSummary">
      <h2 className="font-satoshi font-bold text-gray-600 text-xl">
        Article <span className="blue_gradient">Summary</span>
      </h2>
      <div className="summary_box">
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default ArticleSummary;
