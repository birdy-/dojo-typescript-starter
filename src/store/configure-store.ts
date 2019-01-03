import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { createRootReducer } from './reducers';

/**
 * Store configuration
 * @param initialState
 */
export const configureStore = () => {
  // Register reducers
  const rootReducer = createRootReducer();
  const middlewares: Middleware[] = [thunk];
  if (process.env.NODE_ENV === 'development') {
    const reduxLoggerConf = require('./reduxLogger.config'); // eslint-disable-line global-require
    middlewares.push(createLogger(reduxLoggerConf));
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
