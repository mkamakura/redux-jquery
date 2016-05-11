import test from 'ava';

import {TabReducer} from '../../reducers/TabReducer';
import {TAB} from '../../contents/contents';

test('should provide the initial state', (t) => {
  t.truthy(TabReducer(undefined, {}) === TAB.ACTIVE);
});

test('should handle CHANGE_TAB action', (t) => {
  t.truthy(TabReducer(TAB.ACTIVE, {type: 'CHANGE_TAB', payload: TAB.COMPLETED}) === TAB.COMPLETED);
});

test('should handle unknown actions', (t) => {
  t.truthy(TabReducer(TAB.ACTIVE, {type: 'unknown'}) === TAB.ACTIVE);
});
