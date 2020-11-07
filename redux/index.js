import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import { initializeSagas } from "./sagas";

export const createReduxStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(initializeSagas);

  return store;
};
