import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../../reducers/index';

export type Props = {
    component: React.ReactNode;
}

const ReduxProvider: React.FC<Props> = (props) => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const middleware = [logger, sagaMiddleware];
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
  return (<Provider store={store}>{props.component}</Provider>)
}
export default ReduxProvider;