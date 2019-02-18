import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import BaseLayout from './components/BaseLayout';
import cartReducer from './reducers/cartReducer';
import Cart from './components/Cart';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // other store enhancers if any
  )

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
