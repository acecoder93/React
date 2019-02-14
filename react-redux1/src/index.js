import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

// Action (this is an object that has a "type")

const increaseAction = {
    type: "INCREASE"
}

// Action Creator





// Creating store from redux
const store = createStore(reducer)





ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

