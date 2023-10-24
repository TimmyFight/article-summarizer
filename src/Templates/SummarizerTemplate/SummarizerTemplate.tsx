import MainHeader from "../../Organisms/MainHeader/MainHeader";
import SummarizerBody from "../../Organisms/SummarizerBody/SummarizerBody";

const SummarizerTemplate = () => {
  return (
    <section
      data-testid="summarizerContainer"
      className="flex flex-col justify-center items-center">
      <MainHeader />
      <SummarizerBody />
    </section>
  );
};

SummarizerTemplate.defaultProps = {
  article: "Empty",
};

export default SummarizerTemplate;
