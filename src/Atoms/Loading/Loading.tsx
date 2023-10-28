import { loader } from "../../assets";

const Loading = () => {
  return (
    <img
      src={loader}
      alt="loader_icon"
      className="w-20 h-20 object-contain"
      data-testid="loading"
    />
  );
};

export default Loading;
