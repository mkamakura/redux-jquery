import { handleActions } from 'redux-actions';
import { INITIAL_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO, ACTIVE_TODO, CANCEL } from '../actions/ActionCreator';
import { TODO_STATUS } from '../contents/contents';

const initialState = [{
  id: 0,
  text: 'todo',
  status: TODO_STATUS.ACTIVE
}];

export const TodoReducer = handleActions({
  [INITIAL_TODO]: (state, action) => {
    return action.payload.map((todo) => {
      return {id: todo.id, text: todo.text, status: TODO_STATUS[todo.status]};
    });
  },
  [ADD_TODO]: (state, action) => [
    {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      text: action.payload.text,
      status: TODO_STATUS.ACTIVE
    },
    ...state
  ],
  [DELETE_TODO]: (state, action) => state.filter((todo) => todo.id !== action.payload),
  [COMPLETE_TODO]: (state, action) => state.map(
    (todo) => todo.id === action.payload ?
      Object.assign({}, todo, {status: TODO_STATUS.COMPLETED}) :
      todo
  ),
  [ACTIVE_TODO]: (state, action) => state.map(
    (todo) => todo.id === action.payload ?
      Object.assign({}, todo, {status: TODO_STATUS.ACTIVE}) :
      todo
  ),
  [CANCEL]: (state) => state
}, initialState);
