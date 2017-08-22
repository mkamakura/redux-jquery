import test from 'ava';
import * as actions from '../../actions/ActionCreator';

test('increment should create increment action', (t) => {
  t.deepEqual(actions.increment(0), {type: actions.INCREMENT, payload: 0});
});

test('increment should create decrement action', (t) => {
  t.deepEqual(actions.decrement(0), {type: actions.DECREMENT, payload: 0});
});
