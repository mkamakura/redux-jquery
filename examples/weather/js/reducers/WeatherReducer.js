import { handleActions } from 'redux-actions';
import { UPDATE_WEATHER } from '../actions/ActionCreator';

const initialState = [];

export const WeatherReducer = handleActions({
  [UPDATE_WEATHER]: (state, action) => action.payload
}, initialState);
