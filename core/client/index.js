import React from 'react';
import ReactDOM from 'react';
import './index.css';
import App from './App';
import BrowserRouter from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; 

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(<Provider store={store}> <BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));