import React from 'react';
import {BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { CommunityScreen } from '../components/community/CommunityScreen';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { GascalculatorScreen } from '../components/gascalculator/GascalculatorScreen';
import { LinkAddressScreen } from '../components/linkadress/LinkAddressScreen';
import { LotteryScreen } from '../components/lottery/LotteryScreen';
import { NewsletterScreen } from '../components/newsletter/NewsletterScreen';
import { ProfileCheckScreen } from '../components/profileCheck/ProfileCheckScreen';
import { VoteScreen } from '../components/vote/VoteScreen';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/" isAuthenticated={ false } component={ DashboardScreen } />
                    <PublicRoute exact path="/newsletter" isAuthenticated={ false } component={ NewsletterScreen } />
                    <PublicRoute exact path="/community" isAuthenticated={ false } component={ CommunityScreen } />
                    <PublicRoute exact path="/vote" isAuthenticated={ false } component={ VoteScreen } />
                    <PublicRoute exact path="/lottery" isAuthenticated={ false } component={ LotteryScreen } />
                    <PublicRoute exact path="/profile-check" isAuthenticated={ false } component={ ProfileCheckScreen } />
                    <PublicRoute exact path="/gas-calculator" isAuthenticated={ false } component={ GascalculatorScreen } />
                    <PublicRoute exact path="/link-address" isAuthenticated={ false } component={ LinkAddressScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
