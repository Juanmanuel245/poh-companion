import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


export const VoteScreen = () => {

    useEffect(() => {ReactGA.pageview('/vote');}, [])

    return (
        <div className="container">
            <h2>Votación vigente</h2>
            <h6>En construcción...</h6>
        </div>
    )
}
