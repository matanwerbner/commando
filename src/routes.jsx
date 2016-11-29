import { Router, Route, Link, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import React from 'react';
import App from './app';
import Category from './app/category';

export default (
     <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path=":category" component={Category} />
        </Route>
         <Route path="*" component={() => <h1>No Match!</h1>}/>
    </Router>
)