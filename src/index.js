import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import necessary react-redux, redux, and redux-logger
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// for user input form to capture userInfo
const userInfo = (state = {}, action ) => {
    return state;
}

const questions = (state = {}, action) => {
    return state;
}
const answers = (state = {}, action) => {
    switch (action.type){
        case 'ADD_Q1_ANSWER':
            return {...state, answerOne: action.payload}
        case 'ADD_Q2_ANSWER':
            return {...state, answerTwo: action.payload}
        case 'ADD_Q3_ANSWER':
            return {...state, answerThree: action.payload}
        case 'ADD_Q4_ANSWER':
            return {...state, answerFour: action.payload}
        case 'RESET':
            return {};
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        questions,
        answers,
        userInfo
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
