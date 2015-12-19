import { combineReducers } from 'redux';
import { WeatherReducer } from './WeatherReducer';

export const RootReducer = combineReducers({
  weather: WeatherReducer
});
