import { fromJS } from 'immutable';

export const initialState = fromJS({
  count: {
    count: 0
  },
  clock: {
    lastUpdate: 0
  },
  timer2: {
    hours: '00',
    minutes: '00',
    seconds: '00',
    status: null
  }
});
