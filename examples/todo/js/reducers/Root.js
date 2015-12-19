import { combineReducers } from 'redux';
import { TodoReducer } from './TodoReducer';
import { TabReducer } from './TabReducer';

export const RootReducer = combineReducers({
  tab: TabReducer,
  todo: TodoReducer
});
