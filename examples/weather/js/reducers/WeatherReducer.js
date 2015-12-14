import { UPDATE_WEATHER } from '../actions/ActionCreator';
import defineReducer from '../../../utils/DefineReducer';

const initialState = [];

export default defineReducer(initialState, {
  [UPDATE_WEATHER]: (state, action) => action.weather
});
