import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

export const UPDATE_WEATHER = 'UPDATE_WEATHER';
export const FETCH_EXCEPTION = 'FETCH_EXCEPTION';

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&APPID=';
const API_KEY = '329465fbebeb9beb21a9d76142de6ce8';

const receiveWeather = createAction(UPDATE_WEATHER, (weather) => weather);
const fetchException = createAction(FETCH_EXCEPTION, (message) => message);

export function updateWeather() {
  return (dispatch) => {
    return fetch(`${WEATHER_API}${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)))
      .catch(() => dispatch(fetchException('failed get weather information.')));
  };
}
