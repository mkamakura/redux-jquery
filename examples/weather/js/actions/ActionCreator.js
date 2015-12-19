import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

export const UPDATE_WEATHER = 'UPDATE_WEATHER';

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&APPID=';
const API_KEY = '329465fbebeb9beb21a9d76142de6ce8';

const receiveWeather = createAction(UPDATE_WEATHER, (weather) => weather);

export function updateWeather() {
  return (dispatch) => {
    return fetch(`${WEATHER_API}${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)))
      .catch(error => dispatch(error)); // TODO
  };
}
