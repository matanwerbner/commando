import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import App from './app';
import Categories from './app/categories';
import Category from './app/category';
import Command from './app/command';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import AppState from './state';

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const state = new AppState(routingStore);

export default (
     <Provider commandLine={ state.commandLine } {...state}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Categories}/>
                <Route name="category" path=":category" component={Category} />
                
                    <Route name="command" path=":category/:command" component={Command} />
            </Route>
            <Route path="*" component={() => <h1>No Match!</h1>}/>
        </Router>
    </Provider>
)