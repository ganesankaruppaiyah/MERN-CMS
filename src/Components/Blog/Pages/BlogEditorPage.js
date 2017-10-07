import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {newBlogPost, saveBlogPost, fetchBlogPost, updateBlogPost} from '../../../actions/BlogActions';
import BlogEditor from '../BlogEditor';

class BlogEditorPage extends Component {
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
  submit = (blogPost) => {
    if (!blogPost._id) {
      return this.props.saveBlogPost(blogPost).then(response => this.this.setState({redirect: true})).catch(err => {
        throw new SubmissionError(this.props.errors)
      })
    } else {
      return this.props.updateBlogPost(blogPost).then(response => this.this.setState({redirect: true})).catch(err => {
        throw new SubmissionError(this.props.errors)
      })
    }
  }
  render() {
    return (
      <div className="wrapper">
      {this.state.redirect
        ? <Redirect to="/"/>
        : <BlogEditor blogPost={this.props.blogPost} loading={this.props.loading} onSubmit={this.submit}/>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {blogPost: state.blogPostStore.blogPost, errors: state.blogPostStore.errors}
}
export default connect(mapStateToProps, {newBlogPost, saveBlogPost, fetchBlogPost, updateBlogPost})(BlogEditorPage);
