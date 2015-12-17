import { INITIAL_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO, ACTIVE_TODO, CANCEL } from '../actions/ActionCreator';
import { TODO_STATUS } from '../contents/contents';
import defineReducer from '../../../utils/DefineReducer';

const initialState = [{
  id: 0,
  text: 'todo',
  status: TODO_STATUS.ACTIVE
}];

export default defineReducer(initialState, {
  [INITIAL_TODO]: (state, action) => {
    return action.todo.map((todo) => {
      return {id: todo.id, text: todo.text, status: TODO_STATUS[todo.status]};
    });
  },
  [ADD_TODO]: (state, action) => {
    return [
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.text,
        status: TODO_STATUS.ACTIVE
      },
      ...state
    ];
  },
  [DELETE_TODO]: (state, action) => state.filter((todo) => todo.id !== action.id),
  [COMPLETE_TODO]: (state, action) => state.map((todo) => todo.id === action.id ? Object.assign({}, todo, {status: TODO_STATUS.COMPLETED}) : todo),
  [ACTIVE_TODO]: (status, action) => status.map((todo) => todo.id === action.id ? Object.assign({}, todo, {status: TODO_STATUS.ACTIVE}) : todo),
  [CANCEL]: (state) => state
});
