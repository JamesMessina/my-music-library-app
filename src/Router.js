import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import Band from './containers/Band'
import LoginPage from './containers/Login'
import SignUpPage from './components/SignUpPage'
import { Redirect } from 'react-router-dom'

const checkAuth = () => {
    if(localStorage.getItem("name") && localStorage.getItem("token")){
        return true
    }else{
        return false 
    }
}


const ProtectedRoute = ({component: Component, ...rest}) =>{
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/" />}
        />
    )
}


const Router = () => {
    return (
        <Switch>
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/" component={LoginPage} />
            <ProtectedRoute exact path="/home" component={Home} />
            <Route exact path="/band/:history_id" component={Band} />
        </Switch>
    );
};

export default Router;