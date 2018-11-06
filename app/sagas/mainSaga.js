import {
  call, put,
} from 'redux-saga/effects';
import { Toast } from 'antd-mobile-rn';
import { getArticleListCall, getArticleTypeCall, getBannerCall } from './apiCalls';

export function* getArticleList(action) {
  try {
    const payload = yield call(getArticleListCall, action.payload);
    yield put({
      type: 'GET_ARTICLE_LIST_SUCCESS',
      payload
    });
  } catch (error) {
    Toast.fail(error.message || '服务器出错');
    yield put({
      type: 'GET_ARTICLE_LIST_FAILURE',
      payload: error.message
    });
  }
}
export function* getArticleType(action) {
  try {
    const payload = yield call(getArticleTypeCall, action.payload);
    yield put({
      type: 'GET_ARTICLE_TYPE_SUCCESS',
      payload
    });
  } catch (error) {
    Toast.fail(error.message || '服务器出错');
    yield put({
      type: 'GET_ARTICLE_TYPE_FAILURE',
      payload: error.message
    });
  }
}
export function* getBanner(action) {
  try {
    const payload = yield call(getBannerCall, action.payload);
    yield put({
      type: 'GET_BANNER_SUCCESS',
      payload
    });
  } catch (error) {
    Toast.fail(error.message || '服务器出错');
    yield put({
      type: 'GET_BANNER_FAILURE',
      payload: error.message
    });
  }
}
