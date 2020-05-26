import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './components/login/LoginPage';




ReactDOM.render(

    <HashRouter basename="/">
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={LoginPage} />

        </Switch>
    </HashRouter >


    , document.querySelector('#root'))