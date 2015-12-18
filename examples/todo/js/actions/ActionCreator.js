export const INITIAL_TODO = 'INITIAL_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const ACTIVE_TODO = 'ACTIVE_TODO';
export const CHANGE_TAB = 'CHANGE_TAB';
export const CANCEL = 'CANCEL';

export function initialTodo(todos) {
  return {type: INITIAL_TODO, todos };
}

export function addTodo(text) {
  if (text === '') return { type: CANCEL };
  return { type: ADD_TODO, text };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id: parseInt(id) };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id: parseInt(id) };
}

export function activeTodo(id) {
  return { type: ACTIVE_TODO, id: parseInt(id) };
}

export function changeTab(tab) {
  return { type: CHANGE_TAB, tab };
}
