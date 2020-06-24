import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-less/semantic.less'


const router = (
    <Router color="primaryColor">
        <div>
            <Route exact path={'/*'} component={App} />
        </div>
    </Router>
);

const root = document.getElementById('root');

if (root) {

    render(router, root);

}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
