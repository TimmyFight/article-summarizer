interface SummarizerProps {
  article?: string;
}

const SummarizerTemplate = ({ article }: SummarizerProps) => {
  if (article === "Empty") {
    return (
      <div data-testid="summarizerContainer">
        Article was not found. Try to search by URL.
      </div>
    );
  }
  return <div data-testid="summarizerContainer">{article}</div>;
};

SummarizerTemplate.defaultProps = {
  article: "Empty",
};

export default SummarizerTemplate;
