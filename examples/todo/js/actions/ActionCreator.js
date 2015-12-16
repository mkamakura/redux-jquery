export const INITIAL_TODO = 'INITIAL_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const ACTIVE_TODO = 'ACTIVE_TODO';
export const CHANGE_TAB = 'CHANGE_TAB';

export function initialTodo(todo) {
  return {type: INITIAL_TODO, todo };
}

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function activeTodo(id) {
  return { type: ACTIVE_TODO, id };
}

export function changeTab(tab) {
  return { type: CHANGE_TAB, tab }
}