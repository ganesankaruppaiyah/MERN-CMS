/* eslint-disable */
import {convertFromRaw, convertToRaw} from 'draft-js';
import {client} from './';
const url = '/articles';
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
export function saveBlogPost(article) {
  article = {
    ...article,
    title: article.title,
    content: JSON.stringify(convertToRaw(article.content)),
  }
  return dispatch => {
    return dispatch({
      type: 'SAVE_BLOGPOST',
      payload: client.post(url, article)
    })
  }
}
export function fetchBlogPost(_id) {
  let article = {
    ..._id,
    title: _id.title,
    content: _id.content,
  }
  return dispatch => {
    return dispatch({
      type: 'FETCH_BLOGPOST',
      payload: client.get(`${url}/${_id}`, article)
    })
  }
}
export function updateBlogPost(article) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_BLOGPOST',
      payload: client.put(`${url}/${article._id}`, article)
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
