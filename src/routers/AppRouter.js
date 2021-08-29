import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CodexScreen } from '../components/codex/CodexScreen';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { GascalculatorScreen } from '../components/gascalculator/GascalculatorScreen';
import { LinkAddressScreen } from '../components/linkadress/LinkAddressScreen';
import { LotteryScreen } from '../components/lottery/LotteryScreen';
import { ResumeLotteryScreen } from '../components/lottery/ResumeLotteryScreen';
import { NewsletterScreen } from '../components/newsletter/NewsletterScreen';
import { ProfileCheckScreen } from '../components/profileCheck/ProfileCheckScreen';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( startChecking() )
    }, [dispatch] )

    if ( checking ) {
        return <h5>Cargando...</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/" isAuthenticated={ false } component={ DashboardScreen } />
                    <PublicRoute exact path="/newsletter" isAuthenticated={ false } component={ NewsletterScreen } />
                    <PublicRoute exact path="/codex" isAuthenticated={ false } component={ CodexScreen } />
                    <PublicRoute exact path="/lottery" isAuthenticated={ false } component={ ResumeLotteryScreen } />
                    <PublicRoute exact path="/lottery-action" isAuthenticated={ false } component={ LotteryScreen } />
                    <PublicRoute exact path="/profile-check" isAuthenticated={ false } component={ ProfileCheckScreen } />
                    <PublicRoute exact path="/gas-calculator" isAuthenticated={ false } component={ GascalculatorScreen } />
                    <PublicRoute exact path="/link-address" isAuthenticated={ false } component={ LinkAddressScreen } />
                    <PublicRoute exact path="/login" isAuthenticated={ !!uid } component={ LoginScreen } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
