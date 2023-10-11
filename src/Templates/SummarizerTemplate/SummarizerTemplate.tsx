import MainHeader from "../../Organisms/MainHeader/MainHeader";
import SummarizerBody from "../../Organisms/SummarizerBody/SummarizerBody";

interface SummarizerProps {
  article?: string;
}

const SummarizerTemplate = ({ article }: SummarizerProps) => {
  if (article === "Empty") {
    return (
      <section data-testid="summarizerContainer">
        Article was not found. Try to search by URL.
      </section>
    );
  }
  return (
    <section data-testid="summarizerContainer">
      <MainHeader />
      <SummarizerBody />
    </section>
  );
};

SummarizerTemplate.defaultProps = {
  article: "Empty",
};

export default SummarizerTemplate;
