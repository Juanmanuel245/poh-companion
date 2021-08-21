import React from 'react';
import {BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { GascalculatorScreen } from '../components/gascalculator/GascalculatorScreen';
import { LinkAddressScreen } from '../components/linkadress/LinkAddressScreen';
import { LotteryScreen } from '../components/lottery/LotteryScreen';
import { ResumeLotteryScreen } from '../components/lottery/ResumeLotteryScreen';
import { NewsletterScreen } from '../components/newsletter/NewsletterScreen';
import { ProfileCheckScreen } from '../components/profileCheck/ProfileCheckScreen';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/" isAuthenticated={ false } component={ DashboardScreen } />
                    <PublicRoute exact path="/newsletter" isAuthenticated={ false } component={ NewsletterScreen } />
                    <PublicRoute exact path="/lottery" isAuthenticated={ false } component={ ResumeLotteryScreen } />
                    <PublicRoute exact path="/lottery-action" isAuthenticated={ false } component={ LotteryScreen } />
                    <PublicRoute exact path="/profile-check" isAuthenticated={ false } component={ ProfileCheckScreen } />
                    <PublicRoute exact path="/gas-calculator" isAuthenticated={ false } component={ GascalculatorScreen } />
                    <PublicRoute exact path="/link-address" isAuthenticated={ false } component={ LinkAddressScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
