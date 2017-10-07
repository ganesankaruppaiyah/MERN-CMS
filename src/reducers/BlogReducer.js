const defaultState = {
  blogPosts: [],
  blogPost: {
    title: {}
  },
  loading: false,
  errors: {}
}
export default(state = defaultState, action = {}) => {
  switch (action.type) {
    case 'FETCH_BLOGPOSTS_FULFILLED':
      {
        return {
          ...state,
          blogPosts: action.payload.data.data,
          loading: false,
          errors: {}
        }
      }
    case 'FETCH_BLOGPOSTS_PENDING':
      {
        return {
          ...state,
          loading: true,
          errors: {}
        }
      }
    case 'FETCH_BLOGPOSTS_REJECTED':
      {
        return {
          ...state,
          loading: false,
          errors: {
            global: action.payload.message
          }
        }
      }
    case 'NEW_BLOGPOST':
      {
        return {
          ...state,
          blogPost: {
            title: {}
          }
        }
      }
    case 'SAVE_BLOGPOST_PENDING':
      {
        return {
          ...state,
          loading: true
        }
      }
    case 'SAVE_BLOGPOST_FULFILLED':
      {
        return {
          ...state,
          blogPosts: [
            ...state.blogPosts,
            action.payload.data
          ],
          errors: {},
          loading: false
        }
      }
    case 'SAVE_BLOGPOST_REJECTED':
      {
        const data = action.payload.response.data;
        // convert feathers error formatting to match client-side error formatting
        const {"title": title, "body.snippet": teaser, "body.bulk": bulk} = data.errors;
        const errors = {
          global: data.message,
          title,
          body: {
            teaser,
            bulk
          }
        };
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }
    case 'FETCH_BLOGPOST_PENDING':
      {
        return {
          ...state,
          loading: true,
          blogPost: {
            name: {}
          }
        }
      }
    case 'FETCH_BLOGPOST_FULFILLED':
      {
        return {
          ...state,
          blogPost: action.payload.data,
          errors: {},
          loading: false
        }
      }
    case 'UPDATE_BLOGPOST_PENDING':
      {
        return {
          ...state,
          loading: true
        }
      }
    case 'UPDATE_BLOGPOST_FULFILLED':
      {
        const blogPost = action.payload.data;
        return {
          ...state,
          blogPosts: state.blogPosts.map(item => item._id === blogPost._id
            ? blogPost
            : item),
          errors: {},
          loading: false
        }
      }
    case 'UPDATE_BLOGPOST_REJECTED':
      {
        const data = action.payload.response.data;
        const {"blogPost.title": title, "blogPost.body.snippet": teaser, "blogPost.body.bulk": bulk} = data.errors;
        const errors = {
          global: data.message,
          title: title,
          body: {
            teaser,
            bulk
          }
        };
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }
    case 'DELETE_BLOGPOST_FULFILLED':
      {
        const _id = action.payload.data._id;
        return {
          ...state,
          blogPosts: state.blogPosts.filter(item => item._id !== _id)
        }
      }
    default:
      return state;
  }
}
