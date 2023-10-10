interface SummarizerProps {
  article?: string;
}

const SummarizerTemplate = ({ article }: SummarizerProps) => (
  <div data-testid="summarizerContainer">{article}</div>
);

SummarizerTemplate.defaultProps = {
  article: "Empty",
};

export default SummarizerTemplate;
