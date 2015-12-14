import { INCREMENT, DECREMENT } from '../actions/ActionCreator';
import defineReducer from '../../../utils/DefineReducer';

const initialState = 0;

export default defineReducer(initialState, {
  [INCREMENT]: (state) => state + 1,
  [DECREMENT]: (state) => state - 1
});
