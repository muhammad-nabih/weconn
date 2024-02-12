const ArticleDetails = ({ params }) => {
  const { articleTitle } = params;
  console.log(articleTitle);
  return <div>{articleTitle} </div>;
};

export default ArticleDetails;
