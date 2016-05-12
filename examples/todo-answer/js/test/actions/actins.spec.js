import test from 'ava';
import {TAB, TODO_STATUS} from '../../contents/contents';
import * as actions from '../../actions/ActionCreator';

test('initialTodo should create initialTodo action', (t) => {
  t.deepEqual(actions.initialTodo({id: 1, text: 'todo', status: TODO_STATUS.ACTIVE}), {type: actions.INITIAL_TODO, payload: {id: 1, text: 'todo', status: TODO_STATUS.ACTIVE}});
})

test('deleteTodo should create deleteTab action', (t) => {
  t.deepEqual(actions.deleteTodo('1'), {type: actions.DELETE_TODO, payload: 1});
});

test('completeTodo should create completeTodo action', (t) => {
  t.deepEqual(actions.completeTodo('1'), {type: actions.COMPLETE_TODO, payload: 1});
});

test('activeTodo should create activeTodo action', (t) => {
  t.deepEqual(actions.activeTodo('1'), {type: actions.ACTIVE_TODO, payload: 1});
})

test('changeTab should create changeTab action', (t) => {
  t.deepEqual(actions.changeTab(TAB.ALL), {type: actions.CHANGE_TAB, payload: TAB.ALL});
  t.deepEqual(actions.changeTab(TAB.ACTIVE), {type: actions.CHANGE_TAB, payload: TAB.ACTIVE});
  t.deepEqual(actions.changeTab(TAB.COMPLETED), {type: actions.CHANGE_TAB, payload: TAB.COMPLETED});
});
