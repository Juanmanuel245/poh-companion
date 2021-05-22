import React from 'react'

export const VoteScreen = () => {

    useEffect(() => {ReactGA.pageview('/vote');}, [])

    return (
        <div className="text-center">
            <h2>Votación vigente</h2>
            <h6>En construcción...</h6>
        </div>
    )
}
