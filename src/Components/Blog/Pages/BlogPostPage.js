import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {newBlogPost, saveBlogPost, fetchBlogPost, updateBlogPost} from '../../../actions/BlogActions';
import BlogPost from '../BlogPost';

class BlogPostPage extends Component {
    state = {
      redirect: false
    }
  componentDidMount = () => {
    const {_id} = this.props.match.params;
    if (_id) {
      this.props.fetchBlogPost(_id)
    } else {
      this.props.newBlogPost();
    }
  }
  submit = (article) => {
    if (!article._id) {
      return this.props.saveBlogPost(article).then(
        response => this.setState({
          redirect: true
        })
      ).catch(err => {
        throw new SubmissionError(this.props.errors)
      })
    } else {
      return this.props.updateBlogPost(article).then(response => this.setState({redirect: true})).catch(err => {
        throw new SubmissionError(this.props.errors)
      })
    }
  }
  render() {
    return (
      <div className="wrapper">
      {this.state.redirect ?
        <Redirect to="/articles"/> :
        <BlogPost article={this.props.article} loading={this.props.loading} onSubmit={this.submit}/>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {article: state.blogPostStore.article, errors: state.blogPostStore.errors}
}
export default connect(mapStateToProps, {newBlogPost, saveBlogPost, fetchBlogPost, updateBlogPost})(BlogPostPage);
