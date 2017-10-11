import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import BlogReducer from './BlogReducer';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  userStore: UserReducer,
  blogPostStore: BlogReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
