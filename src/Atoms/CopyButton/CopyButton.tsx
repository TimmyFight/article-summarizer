import { useState } from "react";
import { copy, tick } from "../../assets";

interface CopyButtonProperies {
  articleUrl: string;
}

const CopyButton = ({ articleUrl }: CopyButtonProperies) => {
  const [copied, setCopied] = useState(false);
  const onClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCopied(true);
    navigator.clipboard.writeText(articleUrl);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className="copy_btn"
      data-testid="copyButton"
      onClick={(event) => onClickHandler(event)}>
      <img
        src={copied ? tick : copy}
        alt="copy_icon"
        className="w-[40%] h-[40%] object-contain"
      />
    </div>
  );
};

export default CopyButton;
