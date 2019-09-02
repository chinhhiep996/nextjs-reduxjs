import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import { initialState } from '../constants/initialState';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const initStore = (preloadState = initialState) => {
  const store = createStore(
    rootReducer,
    preloadState,
    applyMiddleware(sagaMiddleware)
  )

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}
