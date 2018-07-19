import { combineReducers } from 'redux';
import { articleList, articleType } from './mainReducer';

const rootReducer = combineReducers({
  articleList,
  articleType
});

export default rootReducer;
