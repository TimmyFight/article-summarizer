import { copy } from "../../assets";
interface ArticleHistoryRecordProperties {
  articleUrl: string;
  onClickHandler: () => void;
}

const ArticleHistoryRecord = ({
  articleUrl,
  onClickHandler,
}: ArticleHistoryRecordProperties) => {
  return (
    <div className="cursor-pointer link_card" onClick={onClickHandler}>
      <div className="copy_btn">
        <img
          src={copy}
          alt="copy_icon"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
      <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
        {articleUrl}
      </p>
    </div>
  );
};

export default ArticleHistoryRecord;
