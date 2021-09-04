import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import Band from './containers/Band'
import LoginPage from './containers/Login'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/band/:history_id" component={Band} />
        </Switch>
    );
};

export default Router;