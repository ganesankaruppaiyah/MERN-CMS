import React from 'react';
import BlogSnippet from './BlogSnippet';

export default function BlogList({articles, deleteBlogPost}){
  const list = () => {
    return articles.map(article => {
      return (
        <BlogSnippet
        key={article._id}
        article={article}
        deleteBlogPost={deleteBlogPost}/>
      )
    })
  }
  return (
    <div className="wrapper">
      {list()}
    </div>
  )
}
