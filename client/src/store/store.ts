import { RootAction, RootState, Services } from 'MyTypes';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import services from '../services';
import { routerMiddleware } from './redux-router';
//import rootEpic from './root-epic';
import { rootSaga } from './root-saga';
import rootReducer from './root-reducer';
import { composeEnhancers } from './utils';

// const epicMiddleware = createEpicMiddleware<
//   RootAction,
//   RootState,
//   Services
// >({
//   dependencies: services,
// });

const sagaMiddleware = createSagaMiddleware();

// configure middlewares
const middlewares = [routerMiddleware, sagaMiddleware];

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(
  rootReducer,
  initialState,
  enhancer
);

//epicMiddleware.run(rootEpic);

// run saga
sagaMiddleware.run(rootSaga);

// export store singleton instance
export default store;