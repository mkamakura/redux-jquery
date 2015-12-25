import { handleActions } from 'redux-actions';

import { CHANGE_TAB } from '../actions/ActionCreator';
import { TAB } from '../contents/contents';

const initialState = TAB.ACTIVE;

export const TabReducer = handleActions({
  [CHANGE_TAB]: (state, action) => TAB[action.payload]
}, initialState);
