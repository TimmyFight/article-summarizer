import { logo } from "../../assets";

const MainHeader = () => {
  return (
    <nav
      data-testid="navigation"
      className="flex justify-between items-center w-full mb-10 pt-3">
      <img
        src={logo}
        alt="Article Summarizer Logo"
        className="w-28 object-contain"
      />
    </nav>
  );
};

export default MainHeader;
