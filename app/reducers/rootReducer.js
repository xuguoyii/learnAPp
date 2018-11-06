import { combineReducers } from 'redux';
import { articleList, articleType, bannerData } from './mainReducer';

const rootReducer = combineReducers({
  articleList,
  articleType,
  bannerData
});

export default rootReducer;
