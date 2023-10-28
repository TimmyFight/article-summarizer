interface ArticleHistoryRecordProperties {
  articleUrl: string;
}

const ArticleHistoryRecord = ({
  articleUrl,
}: ArticleHistoryRecordProperties) => {
  return <div>{articleUrl}</div>;
};

export default ArticleHistoryRecord;
