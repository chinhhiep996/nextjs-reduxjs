import * as actionTypes from '../constants/types';
import { initialState } from '../constants/initialState';

const clockInitialState = initialState.get('clock');

const clockReducer = (state = clockInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK_CLOCK:
      return state.merge({
        lastUpdate: action.ts
      });
    default:
      return state;
  }
}

export default clockReducer;
