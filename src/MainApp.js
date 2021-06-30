import React, { Suspense } from 'react';
import { NavMenu } from './components/ui/NavMenu';
import { AppRouter } from './routers/AppRouter';
import './i18n/i18Next';

export const MainApp = () => {

    return (
        <Suspense fallback="Loading...">
            <NavMenu />
            <AppRouter />
        </Suspense>
    )
}
