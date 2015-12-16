import { CHANGE_TAB, INITIAL_TODO, ADD_TODO, DELETE_TODO,  COMPLETE_TODO, ACTIVE_TODO } from '../actions/ActionCreator';
import defineReducer from '../../../utils/DefineReducer';

const TODO_STATUS = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

const TAB = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

const initialState = {
  tab: TAB.ACTIVE,
  todo: [{
    id: 0,
    text: 'todo',
    status: TODO_STATUS.ACTIVE
  }]
};

export default defineReducer(initialState, {
  [INITIAL_TODO]: (state, action) => {
    const todo = action.todo.map((todo) => {
      return {id: todo.id, text: todo.text, status: TODO_STATUS[todo.status]};
    });
    return {tab: TAB.ACTIVE, todo: todo};
  },
  [ADD_TODO]: (state, action) => {
    if ([...action.text].length === 0) return state;
    return {tab: state.tab, todo: [
      {
        id: state.todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.text,
        status: TODO_STATUS.ACTIVE
      },
      ...state.todo
    ]};
  },
  [DELETE_TODO]: (status, action) => {
    return {tab: status.tab, todo: status.todo.filter((todo) => todo.id !== action.id)};
  },
  [COMPLETE_TODO]: (status, action) => {
    return {tab: status.tab, todo: status.todo.map((todo) => todo.id === action.id ? Object.assign({}, todo, {status: TODO_STATUS.COMPLETED}) : todo)};
  },
  [ACTIVE_TODO]: (status, action) => {
    return {tab: status.tab, todo: status.todo.map((todo) => todo.id === action.id ? Object.assign({}, todo, {status: TODO_STATUS.ACTIVE}) : todo)};
  },
  [CHANGE_TAB]: (status, action) => {
    return Object.assign({}, status, {tab: TAB[action.tab]});
  }
});
