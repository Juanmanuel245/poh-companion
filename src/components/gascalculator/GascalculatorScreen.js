import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

// import { gasPrices } from '../../helpers/fetch';

export const GascalculatorScreen = () => {
    const { t } = useTranslation(['gascalculator']);
    useEffect(() => {ReactGA.pageview('/gas-calculator');}, [])


    // const [gasFastPrice, setGasFastPrice] = useState([]);
    // const [gasRapidPrice, setGasRapidPrice] = useState([]);
    // const [gasLowPrice, setGasLowPrice] = useState([]);

    // useEffect(() => {
    //     async function getGasPrices() {
    //         const resp = await gasPrices();
    //         const body = await resp.json();
    //         setGasRapidPrice(body.result.FastGasPrice);
    //         setGasFastPrice(body.result.ProposeGasPrice);
    //         setGasLowPrice(body.result.SafeGasPrice);
    //     }
    //     getGasPrices();
    //   }, []);

    return (
        <div className="text-center">
            <h2>{t('titulo')}</h2>
            <h6>En construcción...</h6>
</div>

    )
}
