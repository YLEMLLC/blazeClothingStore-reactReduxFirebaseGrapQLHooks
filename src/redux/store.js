import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootRucer from './root-reducer';

const middlewres = [logger];

export const store = createStore(rootRucer, applyMiddleware(...middlewres));

export const persistor = persistStore(store);
