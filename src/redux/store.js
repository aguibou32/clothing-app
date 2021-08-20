import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [logger];
// const store = createStore(rootReducer, applyMiddleware(...middlewares),);

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

export default store;