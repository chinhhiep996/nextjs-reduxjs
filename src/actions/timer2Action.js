import * as actionTypes from '../constants/types';

export function setHours(hours) {
  return {
    type: actionTypes.HOURS,
    hours
  }
}

export function setMinutes(minutes) {
  return {
    type: actionTypes.MINUTES,
    minutes
  }
}

export function setSeconds(seconds) {
  return {
    type: actionTypes.SECONDS,
    seconds
  }
}

export function setStatus(status) {
  return {
    type: actionTypes.STATUS,
    status
  }
}
