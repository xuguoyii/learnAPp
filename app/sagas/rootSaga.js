import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getArticleList } from './mainSaga';

export default function* rootSaga() {
    yield takeLatest('GET_ARTICLE_LIST_START', getArticleList);
}
