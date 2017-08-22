import test from 'ava';
import * as actions from '../../actions/ActionCreator';

test('updateName should create updateName action', (t) => {
  t.deepEqual(actions.updateName('Kamakura Masaya'), {type: actions.UPDATE_NAME, payload: 'Kamakura Masaya'});
});
