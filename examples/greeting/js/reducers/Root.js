import { combineReducers } from 'redux';
import { GreetingReducer } from './GreetingReducer';

export const RootReducer = combineReducers({
  name: GreetingReducer
});
