const initialState = { data: {}, error: '', loading: true };
import { put } from 'redux-saga/effects'

export function articleList(state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case 'GET_ARTICLE_LIST_SUCCESS':
			return { ...state, data: action.payload, loading: false };
		case 'GET_ARTICLE_LIST_FAILURE':
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
};
