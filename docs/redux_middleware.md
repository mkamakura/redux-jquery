# Redux Middleware

## redux-logger
- コンソールログに前の`state`と次の`state`を出力する
- https://github.com/fcomb/redux-logger

### Usage
```js
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { RootReducer } from './reducers/Root';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
const store = createStoreWithMiddleware(RootReducer);
```

## redux-actions

## redux-thunk
