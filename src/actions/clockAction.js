import * as actionTypes from '../constants/types';

export function startClock() {
  return {
    type: actionTypes.START_CLOCK
  }
}

export function tickClock() {
  return {
    type: actionTypes.TICK_CLOCK,
    ts: Date.now()
  }
}
