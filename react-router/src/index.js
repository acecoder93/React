import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddMovie from './components/AddMovie';
import AllMovies from './components/AllMovies';
import BaseLayout from './components/BaseLayout';
import Article from './components/Article';
import Forms from './components/Forms';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path ="/" component={App}/>
                <Route path ="/add-movie" component={AddMovie}/>
                <Redirect from='/old-page' to='/'/>
                <Route path ="/all-movies" component={AllMovies}/>
                <Route path = "/article/:art" component={Article} />
                <Route path = "/forms" component={Forms} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    
    
    
    , document.getElementById('root'));
