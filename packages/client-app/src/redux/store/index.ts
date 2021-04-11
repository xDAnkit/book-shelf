import AppReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(AppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
