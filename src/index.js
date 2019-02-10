import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import getCurrencyReducer from './store/reducers/getCurrency';
import getResultsReducer from './store/reducers/getResults';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    currencyList: getCurrencyReducer,
    results: getResultsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App/>    
    </Provider>    
);

ReactDOM.render(app, document.getElementById('root'));


