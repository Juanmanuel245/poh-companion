import React, { useEffect, useState } from 'react';
import './dashboard.css';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import '../../app.css';
import { coinsPrices } from "../../helpers/coingecko";

export const DashboardScreen = () => {
    const { t } = useTranslation(['dashboard']);
    useEffect(() => {ReactGA.pageview('/');}, [])

    let wsObj;
    let wsUrl = 'wss://www.gasnow.org/ws';

    const [gasRapidPrice, setGasRapidPrice] = useState([]);
    const [gasFastPrice, setGasFastPrice] = useState([]);
    const [gasNormalPrice, setGasNormalPrice] = useState([]);
    const [gasLowPrice, setGasLowPrice] = useState([]);

    const [bitcoinPrice, setBitcoinPrice] = useState([]);
    const [ethereumPrice, setEthereumPrice] = useState([]);
    const [ubiPrice, setUbiPrice] = useState([]);

    let updatePageGasPriceData = (data) => {
        if (data && data.gasPrices) {
            setGasRapidPrice((data.gasPrices.rapid / 1000000000).toFixed(0));
            setGasFastPrice((data.gasPrices.fast / 1000000000).toFixed(0));
            setGasNormalPrice((data.gasPrices.standard / 1000000000).toFixed(0));
            setGasLowPrice((data.gasPrices.slow / 1000000000).toFixed(0));
        }
    };

    wsObj = new WebSocket(wsUrl);
    wsObj.onopen = (evt) => {};

    wsObj.onmessage = (evt) => {
    const dataStr = evt.data;
    const data = JSON.parse(dataStr);
    
    if (data.type) {
        updatePageGasPriceData(data.data)
    }
    };

    wsObj.onclose = (evt) => {};

    useEffect(() => {
        getCoinsPrices();
    }, [])

    async function getCoinsPrices() {
        const resp = await coinsPrices();
        const body = await resp.json();
        setBitcoinPrice(body.bitcoin.usd);
        setEthereumPrice(body.ethereum.usd);
        setUbiPrice(body['universal-basic-income'].usd);
    }


    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-xs-12 col-md-12 col-md-12 mt-4 mb-4 ">
                    <div className="poh-card">
                        <div className="card-body "> {t('precio-cryptos')} </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4 col-md-4 mt-3">
                    <div className="poh-card">
                    <i className="fab fa-bitcoin fa-5x mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title">Bitcoin (BTC)</h5>
                            <p className="card-text">U$S { bitcoinPrice }</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-4 col-md-4 mt-3">
                    <div className="poh-card">
                    <i className="fab fa-ethereum fa-5x mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title">Ethereum (ETH)</h5>
                            <p className="card-text">U$S { ethereumPrice }</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-4 col-md-4 mt-3">
                    <div className="poh-card">
                    <i className="fas fa-universal-access fa-5x mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title">UBI</h5>
                            <p className="card-text">U$S { ubiPrice }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-xs-12 col-md-12 col-md-12 mt-5 mb-4 mt-3">
                    <div className="poh-card">
                        <div className="card-body"> {t('precio-gas')} </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3 col-md-3 mt-3">
                    <div className="poh-card">
                    <i className="fas fa-rocket fa-5x mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title">{t('gas-rapid')}</h5>
                            <p className="card-text">{ gasRapidPrice }</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-3 col-md-3  mt-3">
                    <div className="poh-card">
                        <i className="fas fa-fighter-jet fa-5x mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title">{t('gas-fast')}</h5>
                            <p className="card-text">{ gasFastPrice }</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-3 col-md-3 mt-3">
                    <div className="poh-card">
                        <i className="fas fa-car-alt fa-5x mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title">{t('gas-normal')}</h5>
                            <p className="card-text">{ gasNormalPrice }</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-3 col-md-3 mt-3">
                    <div className="poh-card">
                        <i className="fas fa-biking fa-5x mt-3"></i>
                        <div className="card-body">
                            <h5 className="card-title">{t('gas-low')}</h5>
                            <p className="card-text">{ gasLowPrice }</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-md-12 mt-4 mt-3 mb-3">
                    <div className="poh-card    ">
                        <div className="card-body"> {t('gas-act-valores')}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
