import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BaseLayout from './components/BaseLayout';
import cartReducer from './reducers/cartReducer';
import Cart from './components/Cart';

const store = createStore(cartReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path = "/" component = {Cart} />
                    <Route exact path = "/app" component = {App} />
                </Switch>
            </BaseLayout>    
        </BrowserRouter>
    </Provider>


, document.getElementById('root'));
