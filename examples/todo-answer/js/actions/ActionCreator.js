import { createAction } from 'redux-actions';

export const INITIAL_TODO = 'INITIAL_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const ACTIVE_TODO = 'ACTIVE_TODO';
export const CHANGE_TAB = 'CHANGE_TAB';
export const CANCEL = 'CANCEL';

export const initialTodo = createAction(INITIAL_TODO, (todos) => todos);
export const deleteTodo = createAction(DELETE_TODO, (id) => parseInt(id));
export const completeTodo = createAction(COMPLETE_TODO, (id) => parseInt(id));
export const activeTodo = createAction(ACTIVE_TODO, (id) => parseInt(id));
export const changeTab = createAction(CHANGE_TAB, (tab) => tab);

export function addTodo(text) {
  return text === '' ? createAction(CANCEL)() : createAction(ADD_TODO)({ text });
}
