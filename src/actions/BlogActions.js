import {client} from './';
const url = '/blog';
export function fetchBlogPosts() {
  return dispatch => {
    dispatch({type: 'FETCH_BLOGPOSTS', payload: client.get(url)})
  }
}
export function newBlogPost() {
  return dispatch => {
    dispatch({type: 'NEW_BLOGPOST'})
  }
}
export function saveBlogPost(blogPost) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_BLOGPOST',
      payload: client.post(url, blogPost)
    })
  }
}
export function fetchBlogPost(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_BLOGPOST',
      payload: client.get(`${url}/${_id}`)
    })
  }
}
export function updateBlogPost(blogPost) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_BLOGPOST',
      payload: client.put(`${url}/${blogPost._id}`, blogPost)
    })
  }
}
export function deleteBlogPost(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_BLOGPOST',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
