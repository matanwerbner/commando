import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import App from './app';
import Categories from './app/categories';
import Category from './app/category';

export default (
     <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Categories}/>
            <Route name="category" path=":category" component={Category} />
        </Route>
         <Route path="*" component={() => <h1>No Match!</h1>}/>
    </Router>
)