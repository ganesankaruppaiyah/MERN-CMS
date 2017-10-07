import React,{Component} from 'react';
import {connect} from 'react-redux';
import BlogList from '../BlogList';
import {fetchBlogPosts} from '../../../actions/BlogActions'

class BlogListPage extends Component {
    componentDidMount() {
      this.props.fetchBlogPosts();
    }
    render() {
        return (
            <div className="wrapper">
              <h1>Articles</h1>
              <BlogList blogPosts={this.props.blogPosts} loading={this.props.loading} errors={this.props.errors}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    blogPosts: state.blogPostStore.blogPosts,
    loading: state.blogPostStore.loading,
    errors: state.blogPostStore.errors
  }
}
export default connect(mapStateToProps, {fetchBlogPosts})(BlogListPage);
