import domReady from '../../utils/domReady';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import { RootReducer } from './reducers/Root';
import Todo from './components/Todo';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
const store = createStoreWithMiddleware(RootReducer);

domReady(() => {
  new Todo('.todo', store);
});
