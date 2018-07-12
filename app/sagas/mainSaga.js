import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getArticleListCall } from './apiCalls';
export function* getArticleList(action) {
	try {
		const payload = yield call(getArticleListCall, action.payload);
		yield put({
			type: 'GET_ARTICLE_LIST_SUCCESS',
			payload: payload
		});
	}
	catch (error) {
		yield put({
			type: 'GET_ARTICLE_LIST_FAILURE',
			payload: error.message
		});
	}
};

