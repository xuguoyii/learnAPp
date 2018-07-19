import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware, logger)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f);
  sagaMiddleware.run(rootSaga);
  return store;
}
