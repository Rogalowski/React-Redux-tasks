import React from "react";

const ArticlesList = ({articles = []}) => (
  <ol>
    {articles.map((title) => <li key={title}>{title}</li>)}
  </ol>
);

export default ArticlesList;
