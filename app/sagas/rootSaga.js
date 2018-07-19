import { takeLatest } from 'redux-saga/effects';
import { getArticleList, getArticleType } from './mainSaga';

export default function* rootSaga() {
  yield takeLatest('GET_ARTICLE_LIST_START', getArticleList);
  yield takeLatest('GET_ARTICLE_TYPE_START', getArticleType);
}
