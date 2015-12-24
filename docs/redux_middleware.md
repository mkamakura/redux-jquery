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

## redux-thunk
