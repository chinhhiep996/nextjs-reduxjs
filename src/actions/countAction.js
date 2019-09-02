import * as actionTypes from '../constants/types';

export function incrementCount() {
  return {
    type: actionTypes.INCREMENT
  }
}

export function decrementCount() {
  return {
    type: actionTypes.DECREMENT
  }
}

export function resetCount() {
  return {
    type: actionTypes.RESET
  }
}
