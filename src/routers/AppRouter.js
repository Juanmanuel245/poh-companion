import React from 'react';
import {BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { GascalculatorScreen } from '../components/gascalculator/GascalculatorScreen';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/" isAuthenticated={ false } component={ DashboardScreen } />
                    <PublicRoute exact path="/gas-calculator" isAuthenticated={ false } component={ GascalculatorScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
