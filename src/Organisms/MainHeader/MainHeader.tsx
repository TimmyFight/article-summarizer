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
          Summerize Articles with
          <br />
          <span className="orange_gradient">OpenAI GPT-4</span>
        </>
      </Headings>
    </header>
  );
};

export default MainHeader;
