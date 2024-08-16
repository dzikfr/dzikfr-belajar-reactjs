import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import counterReducer from './features/counter/reducer';

let rootReducers = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;