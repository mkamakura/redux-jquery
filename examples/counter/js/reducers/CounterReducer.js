import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../actions/ActionCreator';

const initialState = 0;

export const CounterReducer = handleActions({
  [INCREMENT]: (state) => state + 1,
  [DECREMENT]: (state) => state - 1
}, initialState);
