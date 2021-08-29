import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

export const GascalculatorScreen = () => {
    const { t } = useTranslation(['gascalculator']);
    useEffect(() => {ReactGA.pageview('/gas-calculator');}, [])


    return (
        <div className="text-center">
            <h2>{t('titulo')}</h2>
            <h6>En construcción...</h6>
</div>

    )
}
