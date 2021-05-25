import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

export const VoteScreen = () => {
    const { t } = useTranslation(['vote']);
    useEffect(() => {ReactGA.pageview('/vote');}, [])

    return (
        <div className="container">
            <h2>{t('titulo')}</h2>
            <h6>En construcción...</h6>
        </div>
    )
}
