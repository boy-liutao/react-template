import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { loadableReady } from '@loadable/component';
// import { Route, Switch } from 'react-router-dom';

import Main from "./pages/Main";

// import Home from './pages/Home/index';
// import Details from './pages/Details/index';
const renderMethod = module ? ReactDOM.render : ReactDOM.hydrate;

loadableReady(() => {
    renderMethod(

        <Router>
            {/* <Switch>
                < Route exact path='/' component={Home} />
                < Route exact path='/details' component={Details} />
            </Switch> */}
            <Main />
        </Router>,
        document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
