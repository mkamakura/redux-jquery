import domReady from '../../utils/domReady';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { RootReducer } from './reducers/Root';
import Weather from './components/Weather';

const createStoreWithMiddleware = applyMiddleware(createLogger(), thunk)(createStore);
const store = createStoreWithMiddleware(RootReducer);

domReady(() => {
  new Weather('.weather', store);
});
