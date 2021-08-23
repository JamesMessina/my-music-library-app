import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import Band from './containers/Band'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/band/:history_id" component={Band} />
        </Switch>
    );
};

export default Router;