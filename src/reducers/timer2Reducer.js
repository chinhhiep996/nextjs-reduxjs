import * as actionTypes from '../constants/types';
import { initialState } from '../constants/initialState';

const countInitialState = initialState.get('timer2');

const formatTime = (time) => {
  time = parseInt(time);
  return time < 10 ? `0${time}` : time.toString().slice(time.toString().length - 2);
}

const timer2Reducer = (state = countInitialState, action) => {
  switch (action.type) {
    case actionTypes.HOURS:
      if (action.hours < 0) {
        return state.merge({
          hours: "00"
        });
      } else {
        let { hours } = action;
        hours = parseInt(formatTime(state.get('hours') + action.hours))

        if (hours > 99) {
          hours = state.get('hours');
        }
        return state.merge({ hours: formatTime(hours) });
      }
    case actionTypes.MINUTES:
      if (action.minutes < 0) {
        return state.merge({
          minutes: "00"
        });
      } else {
        let { minutes } = action;
        minutes = parseInt(formatTime(state.get('minutes') + action.minutes));

        if (minutes > 59) {
          minutes = parseInt(minutes.toString().slice(minutes.toString().length - 1));
        }

        return state.merge({ minutes: formatTime(minutes) });
      }
    case actionTypes.SECONDS:
      if (action.seconds < 0) {
        return state.merge({
          seconds: "00"
        });
      } else {
        let { seconds } = action;
        seconds = parseInt(formatTime(state.get('seconds') + action.seconds));

        if (seconds > 59) {
          seconds = parseInt(seconds.toString().slice(seconds.toString().length - 1));
        }

        return state.merge({ seconds: formatTime(seconds) });
      }
    case actionTypes.STATUS:
      return state.merge({
        status: action.status
      });
    default:
      return state;
  }
}

export default timer2Reducer;
