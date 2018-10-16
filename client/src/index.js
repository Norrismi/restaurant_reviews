import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'


import reducers from './reducers'
import Routes from './routes'


const createStoreWM = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)




ReactDOM.render(
<Provider store={createStoreWM(reducers)}>
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
</Provider>
//<App />

,document.getElementById('root'));


