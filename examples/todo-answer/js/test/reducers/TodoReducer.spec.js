import test from 'ava';

import {TodoReducer} from '../../reducers/TodoReducer';
import {TODO_STATUS} from '../../contents/contents';

test('should provide the initial state', (t) => {
  t.deepEqual(TodoReducer(undefined, {}), [{id: 0, text: 'todo', status: TODO_STATUS.ACTIVE}]);
});

test('should handle INITIAL_TODO action', (t) => {
  t.deepEqual(TodoReducer(
    [{id: 0, text: 'todo', status: TODO_STATUS.ACTIVE}],
    {type: 'INITIAL_TODO', payload: [
      {id: 1, text: "Counter", status: TODO_STATUS.COMPLETED},
      {id: 2, text: "Greeting", status: TODO_STATUS.COMPLETED},
      {id: 3, text: "Weather", status:TODO_STATUS.ACTIVE},
      {id: 4, text: "TODO", status: TODO_STATUS.ACTIVE}]}
  ),
    [
      {id: 1, text: "Counter", status: TODO_STATUS.COMPLETED},
      {id: 2, text: "Greeting", status: TODO_STATUS.COMPLETED},
      {id: 3, text: "Weather", status: TODO_STATUS.ACTIVE},
      {id: 4, text: "TODO", status: TODO_STATUS.ACTIVE}
    ]
  );
});

test('should handle ADD_TODO action', (t) => {
  t.deepEqual(TodoReducer(
    [],
    {type: 'ADD_TODO', payload: {text: "TODO"}}
  ),
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE}
    ]
  );

  t.deepEqual(TodoReducer(
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE}
    ],
    {type: 'ADD_TODO', payload: {text: "write tests"}}
  ),
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE},
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ]
  );

  t.deepEqual(TodoReducer(
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE},
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ],
    {type: 'ADD_TODO', payload: {text: "fix tests"}}
  ),
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE},
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE},
      {id: 2, text: "fix tests", status: TODO_STATUS.ACTIVE}
    ]
  );
});


test('should handle DELETE_TODO action', (t) => {
  t.deepEqual(TodoReducer(
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE},
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE},
      {id: 2, text: "fix tests", status: TODO_STATUS.ACTIVE}
    ],
    {type: 'DELETE_TODO', payload: 2}
  ),
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE},
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ]
  );

  t.deepEqual(TodoReducer(
    [
      {id: 0, text: "TODO", status: TODO_STATUS.ACTIVE},
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ],
    {type: 'DELETE_TODO', payload: 0}
  ),
    [
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ]
  );

  t.deepEqual(TodoReducer(
    [
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ],
    {type: 'DELETE_TODO', payload: 1}
  ),
    []
  );
});

test('should handle ACTIVE_TODO action', (t) => {
  t.deepEqual(TodoReducer(
    [
      {id: 1, text: "write tests", status: TODO_STATUS.COMPLETED}
    ],
    {type: 'ACTIVE_TODO', payload: 1}
  ),
    [
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ]
  );
});

test('should handle COMPLETE_TODO action', (t) => {
  t.deepEqual(TodoReducer(
    [
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ],
    {type: 'COMPLETE_TODO', payload: 1}
  ),
    [
      {id: 1, text: "write tests", status: TODO_STATUS.COMPLETED}
    ]
  );
});

test('should handle unknown actions', (t) => {
  t.deepEqual(TodoReducer(
    [
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ],
    {type: 'undefined'}
  ),
    [
      {id: 1, text: "write tests", status: TODO_STATUS.ACTIVE}
    ]
  );
});
