import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootRucer from './root-reducer';

const middlewres = [logger];
const store = createStore(rootRucer, applyMiddleware(...middlewres));

export default store;
