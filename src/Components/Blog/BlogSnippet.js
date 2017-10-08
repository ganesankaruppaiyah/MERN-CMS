import React from 'react';
export default function BlogSnippet({article}) {
  return (
    <div className="article">
        <div>{article.title}</div>
        <div>{article.content.start}</div>
        <div>{article.content.full}</div>
    </div>
  )
}
BlogSnippet.propTypes = {
  article: React.PropTypes.object.isRequired
}
