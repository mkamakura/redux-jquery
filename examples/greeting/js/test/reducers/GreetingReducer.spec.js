import test from 'ava';
import {GreetingReducer} from '../../reducers/GreetingReducer';

test('should provide the initial state', (t) => {
  t.truthy(GreetingReducer(undefined, {}) === '');
});

test('should handle UPDATE_NAME action', (t) => {
  t.truthy(GreetingReducer('', {type: 'UPDATE_NAME', payload: 'Masaya Kamakura'}) === 'Masaya Kamakura');
});

test('should handle unknown actions', (t) => {
  t.truthy(GreetingReducer('Masaya Kamakura', {type: 'unknown'}) === 'Masaya Kamakura');
});
