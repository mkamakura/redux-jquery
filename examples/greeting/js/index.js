import domReady from '../../utils/domReady';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import { RootReducer } from './reducers/Root';
import Greeting from './components/Greeting';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
const store = createStoreWithMiddleware(RootReducer);

domReady(() => {
  new Greeting('.greeting', store);
});
