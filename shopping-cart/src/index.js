import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BaseLayout from './components/BaseLayout';
import cartReducer from './reducers/cartReducer'

const store = createStore(cartReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path = "/" component = {App} />
                </Switch>
            </BaseLayout>    
        </BrowserRouter>
    </Provider>


, document.getElementById('root'));
