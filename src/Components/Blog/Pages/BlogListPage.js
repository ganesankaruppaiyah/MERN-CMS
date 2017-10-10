import React, {Component} from 'react';
import {connect} from 'react-redux';
import BlogList from '../BlogList';
import {fetchBlogPosts, deleteBlogPost} from '../../../actions/BlogActions'

class BlogListPage extends Component {
    componentDidMount() {
      this.props.fetchBlogPosts();
    }
    render() {
        return (
            <div className="wrapper">
              <h1>Articles</h1>
              <BlogList articles={this.props.articles} loading={this.props.loading} errors={this.props.errors} deleteBlogPost={this.props.deleteBlogPost} />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    articles: state.blogPostStore.articles,
    loading: state.blogPostStore.loading,
    errors: state.blogPostStore.errors
  }
}
export default connect(mapStateToProps, {fetchBlogPosts, deleteBlogPost})(BlogListPage);
