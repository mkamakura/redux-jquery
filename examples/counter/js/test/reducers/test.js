import test from 'ava';
import {CounterReducer} from '../../reducers/CounterReducer';

test('should provide the initial state', (t) => {
  t.truthy(CounterReducer(undefined, {}) === 0);
});

test('should handle INCREMENT action', (t) => {
  t.truthy(CounterReducer(1, {type: 'INCREMENT'}) === 2);
});

test('should handle DECREMENT action', (t) => {
  t.truthy(CounterReducer(1, {type: 'DECREMENT'}) === 0);
});

test('should handle unknown actions', (t) => {
  t.truthy(CounterReducer(1, {type: 'unknown'}) === 1);
});
