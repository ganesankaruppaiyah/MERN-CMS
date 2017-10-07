import React from 'react';
export default function BlogSnippet({blogPost}) {
  return (
    <div className="blogPost">
      <h1 className="blogTitle">
        {blogPost.title}
      </h1>
      <div className="blogBody">
        blog
      </div>
    </div>
  )
}
BlogSnippet.propTypes = {
  blogPost: React.PropTypes.object.isRequired
}
