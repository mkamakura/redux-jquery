import { CHANGE_TAB } from '../actions/ActionCreator';
import { TAB } from '../contents/contents';
import defineReducer from '../../../utils/DefineReducer';

const initialState = TAB.ACTIVE;

export default defineReducer(initialState, {
  [CHANGE_TAB]: (state, action) => TAB[action.tab]
});
