const initialState = { data: {}, error: '', loading: true };
import { put } from 'redux-saga/effects'

// 全局通用参数
export function total(state = {}, action) {
	switch (action.type) {
		case 'UPDATE_TOTAL':
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

