const ArticleDetails = ({ params }) => {
  const { articleTitle } = params;
  return <div>{articleTitle} </div>;
};

export default ArticleDetails;
