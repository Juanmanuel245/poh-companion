import React from 'react'
import { Navbar } from './components/ui/Navbar';
import { AppRouter } from './routers/AppRouter';

export const MainApp = () => {

    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    )
}
