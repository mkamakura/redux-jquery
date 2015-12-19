import { combineReducers } from 'redux';
import { CounterReducer } from './CounterReducer';

export const RootReducer = combineReducers({
  result: CounterReducer
});
