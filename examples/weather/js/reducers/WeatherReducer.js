import { handleActions } from 'redux-actions';
import { UPDATE_WEATHER, FETCH_EXCEPTION } from '../actions/ActionCreator';

const initialState = {
  data: [],
  message: ''
};

export const WeatherReducer = handleActions({
  [UPDATE_WEATHER]: (state, action) => Object.assign({}, state, { data: action.payload, message: '' }),
  [FETCH_EXCEPTION]: (state, action) => Object.assign({}, state, { message: action.payload })
}, initialState);
