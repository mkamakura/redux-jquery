import fetch from 'isomorphic-fetch';

export const UPDATE_WEATHER = 'UPDATE_WEATHER';

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&APPID=';
const API_KEY = '329465fbebeb9beb21a9d76142de6ce8';

function receiveWeather(weather) {
  return { type: UPDATE_WEATHER, weather };
}

export function updateWeather() {
  return (dispatch) => {
    return fetch(`${WEATHER_API}${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)));
  };
}
