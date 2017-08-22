import test from 'ava';
import {WeatherReducer} from '../../reducers/WeatherReducer';

test('should provide the initial state', (t) => {
  t.deepEqual(WeatherReducer(undefined, {}), {data: [], message: ''});
});

test('should handle UPDATE_WEATHER action', (t) => {
  t.deepEqual(WeatherReducer({}, {type: 'UPDATE_WEATHER', payload: ['weather']}), {data: ['weather'], message: ''});
});

test('should handle FETCH_EXCEPTION action', (t) => {
  t.deepEqual(WeatherReducer({}, {type: 'FETCH_EXCEPTION', payload: 'exception'}), {message: 'exception'});
});

test('should handle unknown actions', (t) => {
  t.deepEqual(WeatherReducer({data: [], message: ''}, {type: 'unknown'}), {data: [], message: ''});
});
