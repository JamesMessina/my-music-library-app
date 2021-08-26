import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import Band from './containers/Band'
import LoginPage from './components/Login'


const Router = () => {
    return (
        <Switch>
            <Route path="/" component={LoginPage} />
            <Route path="/dashboard" component={Home} />
            <Route path="/band/:history_id" component={Band} />
        </Switch>
    );
};

export default Router;