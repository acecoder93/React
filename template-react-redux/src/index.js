import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BaseLayout from './components/BaseLayout';

// Need to place a reducer in the store
const store = createStore();

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path ="/" component={App} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>
    
    
    
    , document.getElementById('root'));

