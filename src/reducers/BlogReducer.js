const defaultState = {
  articles: [],
  article: {
    title: {},
    content: {}
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
          articles: action.payload.data.data,
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
            article: {
              title: {},
              content: {}
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
          articles: [
            ...state.articles,
            action.payload.data
          ],
          errors: {},
          loading: false
        }
      }
    case 'SAVE_BLOGPOST_REJECTED':
      {
        const data = action.payload.response.data;
        const {title, content,} = data.errors;
        const errors = {
          global: data.message,
          title,
          content,
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
          article: {
            title: {},
            content: {}
          }
        }
      }
    case 'FETCH_BLOGPOST_FULFILLED':
      {
        return {
          ...state,
          article: action.payload.data,
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
        const article = action.payload.data;
        return {
          ...state,
          articles: state.articles.map(item => item._id === article._id
            ? article
            : item),
          errors: {},
          loading: false
        }
      }
    case 'UPDATE_BLOGPOST_REJECTED':
      {
        const data = action.payload.response.data;
        const {title, content} = data.errors;
        const errors = {
          global: data.message,
          title,
          content,
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
          articles: state.articles.filter(item => item._id !== _id)
        }
      }
    default:
      return state;
  }
}
