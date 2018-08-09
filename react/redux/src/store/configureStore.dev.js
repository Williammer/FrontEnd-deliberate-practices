import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import api from '../middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';

const epics = createEpicMiddleware();
const middleware = [thunk, epics];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, enhancer);

  epics.run(rootEpic);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configureStore;
