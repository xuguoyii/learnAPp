import { combineReducers } from 'redux';
import { articleList } from './mainReducer';

const rootReducer = combineReducers({
	articleList: articleList,
});

export default rootReducer;
