import React, { Suspense } from 'react';
import { NavMenu } from './components/ui/NavMenu';
import { AppRouter } from './routers/AppRouter';
import './i18n/i18Next';
import { Provider } from 'react-redux';
import { store } from './store/store';


export const MainApp = () => {

    return (
        <Suspense fallback="Loading...">
            <Provider store={ store }>
                <NavMenu />
                <AppRouter />
            </Provider>
        </Suspense>
    )
}
