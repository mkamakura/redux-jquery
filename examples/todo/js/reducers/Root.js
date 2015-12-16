import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';

export const RootReducer = combineReducers({
  todo: TodoReducer
});
