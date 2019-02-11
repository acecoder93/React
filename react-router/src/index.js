import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddMovie from './components/AddMovie';
import AllMovies from './components/AllMovies';
import BaseLayout from './components/BaseLayout'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path ="/" component={App}/>
                <Route path ="/add-movie" component={AddMovie}/>
                <Route path ="/all-movies" component={AllMovies}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    
    
    
    , document.getElementById('root'));
