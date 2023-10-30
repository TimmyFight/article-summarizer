import CopyButton from "../CopyButton/CopyButton";

interface ArticleHistoryRecordProperties {
  articleUrl: string;
  onClickHandler: () => void;
}

const ArticleHistoryRecord = ({
  articleUrl,
  onClickHandler,
}: ArticleHistoryRecordProperties) => {
  return (
    <div
      className="cursor-pointer link_card"
      data-testid="articleHistory"
      onClick={onClickHandler}>
      <CopyButton articleUrl={articleUrl} />
      <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
        {articleUrl}
      </p>
    </div>
  );
};

export default ArticleHistoryRecord;
