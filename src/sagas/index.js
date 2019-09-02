import { all, fork } from 'redux-saga/effects';
import clock from './clock';

function* rootSaga() {
  yield all([
    fork(clock)
  ])
}

export default rootSaga;
