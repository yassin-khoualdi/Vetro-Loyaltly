import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../layout/home/Header'
import Login from '../components/home/Login'

const home = (props) => {
    return (
        <div>
            <Header props = {props} />
            <Switch>
                <Route exact path = {props.match.path} component={Login} /> 
            </Switch>
        </div>
    );
}

export default home;
