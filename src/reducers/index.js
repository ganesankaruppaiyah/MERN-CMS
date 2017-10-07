import {combineReducers} from 'redux';
import ContactReducer from './ContactReducer';
import BlogReducer from './BlogReducer';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  blogPostStore: BlogReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
