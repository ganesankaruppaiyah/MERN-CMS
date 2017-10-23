import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {stateToHTML} from 'draft-js-export-html';
import {convertFromRaw} from 'draft-js';

export default function BlogSnippet({article, deleteBlogPost}) {
  console.log(article.title);
  console.log(article.content);
  return (
    <div className="article">
      <div className="articleHeader">
        <h2>{article.title}</h2>
      </div>
      <div className="articleBody">
        <p>
          <span dangerouslySetInnerHTML={{__html: stateToHTML(convertFromRaw(JSON.parse(article.content)))}}></span>
        </p>
      </div>
      <div className="btnRow">
        <Link to={`/articles/edit/${article._id}`} className="rowBtn greenBtn">Edit</Link>
        <button className="rowBtn redBtn" onClick={() => deleteBlogPost(article._id)}>Delete</button>
      </div>
      <hr/>
    </div>
  )
}
BlogSnippet.propTypes = {
  article: PropTypes.object.isRequired
}
