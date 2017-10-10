import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BlogPost from './BlogPost';

export default function BlogSnippet({article, deleteBlogPost}) {
  return (
    <div className="article">
            <div className="articleHeader">
              <h2>{article.title}</h2>
            </div>
            <div className="articleBody">
              <p>
              <span>{article.content.start}</span>
              <span>{article.content.full}</span>
              </p>
            </div>
          <div className="articleFooter">
            <div className="btnRow">
              <Link to={`/articles/edit/${article._id}`} className="rowBtn greenBtn">Edit</Link>
              <button className="rowBtn redBtn" onClick={() => deleteBlogPost(article._id)}>Delete</button>
            </div>
          </div>
    </div>
  )
}
BlogSnippet.propTypes = {
  article: React.PropTypes.object.isRequired,
}
