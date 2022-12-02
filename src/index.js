import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import necessary react-redux, redux, and redux-logger
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const questions = (state = [], action) => {
    return state;
}
const question = (state = [], action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
        questions
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
