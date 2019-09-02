import { combineReducers } from 'redux-immutable';

import countReducer from './countReducer';
import clockReducer from './clockReducer';
import timerReducer from './timer2Reducer';

const rootReducer = combineReducers({
  count: countReducer,
  clock: clockReducer,
  timer2: timerReducer
});

export default rootReducer;
