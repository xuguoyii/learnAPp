import { combineReducers } from 'redux';
import { total } from './mainReducer';

const rootReducer = combineReducers({
	total: total,
});

export default rootReducer;
