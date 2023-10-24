interface ArticleHistoryRecordProperties {
  articleUrl: string;
}

const ArticleHistoryRecord = ({
  articleUrl,
}: ArticleHistoryRecordProperties) => {
  return <li>{articleUrl}</li>;
};

export default ArticleHistoryRecord;
