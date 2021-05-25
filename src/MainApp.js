import React, { Suspense } from 'react';
import { Navbar } from './components/ui/Navbar';
import { AppRouter } from './routers/AppRouter';
import './i18n/i18Next';

export const MainApp = () => {

    return (
        <Suspense fallback="Loading...">
            <Navbar />
            <AppRouter />
        </Suspense>
    )
}
