import React from 'react';
import {BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { CommunityScreen } from '../components/community/CommunityScreen';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { GascalculatorScreen } from '../components/gascalculator/GascalculatorScreen';
import { ProfileCheckScreen } from '../components/profileCheck/ProfileCheckScreen';
import { VoteScreen } from '../components/vote/VoteScreen';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/" isAuthenticated={ false } component={ DashboardScreen } />
                    <PublicRoute exact path="/community" isAuthenticated={ false } component={ CommunityScreen } />
                    <PublicRoute exact path="/vote" isAuthenticated={ false } component={ VoteScreen } />
                    <PublicRoute exact path="/profile-check" isAuthenticated={ false } component={ ProfileCheckScreen } />
                    <PublicRoute exact path="/gas-calculator" isAuthenticated={ false } component={ GascalculatorScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
