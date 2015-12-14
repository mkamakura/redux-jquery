import { UPDATE_NAME } from '../actions/ActionCreater';
import defineReducer from '../../../utils/DefineReducer';

const initialState = '';

export default defineReducer(initialState, {
  [UPDATE_NAME]: (state, action) => action.name
});
