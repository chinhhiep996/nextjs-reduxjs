import { all, call, put, take } from 'redux-saga/effects';

import * as actionTypes from '../constants/types';
import { tickClock } from '../actions/clockAction';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock());
    yield call(delay, 1000);
  }
}

function* clock() {
  yield all([
    call(runClockSaga)
  ]);
}

export default clock;
