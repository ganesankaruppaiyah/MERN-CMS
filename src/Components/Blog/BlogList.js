import React from 'react';
import BlogSnippet from './BlogSnippet';

export default function BlogList({blogPosts}){
  const snippets = () => {
    return blogPosts.map(blogPost => {
      return (
        <BlogSnippet
        key={blogPost._id}
        blogPost={blogPost}/>
      )
    })
  }
  return (
    <div className="wrapper">
      {snippets()}
    </div>
  )
}
