import {
    Router,
    Route,
    Link,
    browserHistory,
    IndexRoute,
    createRoutes
} from 'react-router'

import matchRoutes from 'react-router/lib/matchRoutes'
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import App from './app';
import Categories from './app/categories';
import Category from './app/category';
import Command from './app/command';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import AppState from './state';
import Dal from './services/Dal.js';

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);
const _Dal = new Dal(state);
const state = new AppState(_Dal, routingStore);
const routes = <Route path="/" component={App}>
    <IndexRoute component={Categories}/>
    <Route name="category" path=":category" component={Category}/>

    <Route name="command" path=":category/:command" component={Command}/>
    <Route path="*" component={() => <h1>No Match!</h1>}/>
</Route>;

const syncParams = (AppState, routes, history) => {
    const routesArray = createRoutes(routes);
    const updateState = location => {
        matchRoutes(routesArray, location, (error, state) => {
            if (!error) {
                AppState.loadFromLocation(state
                            ? state.params
                            : {})
            }
        })
    }
    updateState(history.getCurrentLocation());

    return history.listen(updateState);
}

syncParams(state, routes, browserHistory)

export default(
    <Provider AppState={state} Routing={routingStore} Dal={_Dal}>
        <Router history={history}>
            { routes }
        </Router>
    </Provider>
)