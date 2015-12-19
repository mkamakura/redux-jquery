import { handleActions } from 'redux-actions';
import { UPDATE_NAME } from '../actions/ActionCreator';

const initialState = '';

export const GreetingReducer = handleActions({
  [UPDATE_NAME]: (state, action) => action.payload
}, initialState);
