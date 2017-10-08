import React from 'react';
import BlogSnippet from './BlogSnippet';

export default function BlogList({articles}){
  const list = () => {
    return articles.map(article => {
      return (
        <BlogSnippet
        key={article._id}
        article={article}/>
      )
    })
  }
  return (
    <div className="wrapper">
      {list()}
    </div>
  )
}
