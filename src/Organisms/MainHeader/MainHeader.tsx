import Navigation from "../../Molecules/Navigation/Navigation";
import Headings from "../../Atoms/Headings/Headings";

const MainHeader = () => {
  return (
    <header
      data-testid="mainHeader"
      className="w-full flex justify-center items-center flex-col">
      <Navigation />
      <Headings>
        <>
          Summarize Articles with
          <br className="max-md:hidden" />
          <span className="orange_gradient"> OpenAI GPT-4</span>
        </>
      </Headings>
      <Headings level={2} customClass="desc">
        <>
          Create summaries of long articles and read them faster.
          <br className="max-md:hidden" />
          This tool turns long articles into clear and concise summaries.
        </>
      </Headings>
    </header>
  );
};

export default MainHeader;
