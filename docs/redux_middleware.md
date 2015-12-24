# Redux Middleware

## redux-logger
- https://github.com/fcomb/redux-logger
- コンソールログに前の`state`と次の`state`を出力する

### Usage
```js
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { RootReducer } from './reducers/Root';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
const store = createStoreWithMiddleware(RootReducer);
```

## redux-actions
- https://github.com/acdlite/redux-actions
- `Action Creator`をラップして使いやすくしてくれている

### Usage

*Action*
```js
import { createAction } from 'redux-actions';

// ActionType
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
```

*Reducer*
```js
import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../actions/ActionCreator';

const initialState = 0;

export const CounterReducer = handleActions({
  [INCREMENT]: (state) => state + 1,
  [DECREMENT]: (state) => state - 1
}, initialState);
```

## redux-thunk
- https://github.com/gaearon/redux-thunk
- `Action`で遅延評価して`dispatch`可能にする
- `Action`で非同期処理を実装するときに利用する

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(rootReducer);
```