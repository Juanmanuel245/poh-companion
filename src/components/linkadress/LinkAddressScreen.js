import React, { useEffect, useState } from 'react'
import { coinsPrices, ubiWallet } from '../../helpers/fetch';
import { useForm } from '../../hooks/useForm';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import '../../app.css';

export const LinkAddressScreen = () => {
    const { t } = useTranslation(['linkaddress']);
    const [ formWalletValues, handleWalletInputChange ] = useForm({wallet: ''});
    const { wallet } = formWalletValues;
    const [validWallet, setValidWallet] = useState(false);
    const [ubiInWallet, setUbiWallet] = useState();
    const [ethereumPrice, setEthereumPrice] = useState([]);
    const [ubiPrice, setUbiPrice] = useState([]);
    let wsObj;
    let wsUrl = 'wss://www.gasnow.org/ws';

    useEffect(() => {
        const wallet = localStorage.getItem('wallet') || '';
        if(wallet !== ''){
            showToken();
            getCoinsPrices();
        }
    }, [])

    useEffect(() => {ReactGA.pageview('/link-address');}, [])

    const addWallet = ( e ) => {
        e.preventDefault();
        localStorage.setItem('wallet', wallet );
        showToken();
        getCoinsPrices();
    }

    const clearWallet = () => {
        localStorage.clear();
        setValidWallet(false);
    }

    async function showToken(){
        const resp = await ubiWallet(); 
        const body = await resp.json();
        const ubiMenosdigitos = body.result / 1000000000000
        setUbiWallet((ubiMenosdigitos / 1000000).toFixed(2));
        setValidWallet(true);
        
    }

    async function getCoinsPrices() {
        const resp = await coinsPrices();
        const body = await resp.json();
        setEthereumPrice(body.ethereum.usd);
        setUbiPrice(body['universal-basic-income'].usd);
    }

    const [gasFastPrice, setGasFastPrice] = useState([]);

    let updatePageGasPriceData = (data) => {
        if (data && data.gasPrices) {
            setGasFastPrice((data.gasPrices.fast / 1000000000).toFixed(0));
        }
    };

    wsObj = new WebSocket(wsUrl);
    wsObj.onopen = (evt) => {console.log("Connection open ...");};

    wsObj.onmessage = (evt) => {
    const dataStr = evt.data;
    const data = JSON.parse(dataStr);
    
    if (data.type) {
        updatePageGasPriceData(data.data)
    }
    };

    wsObj.onclose = (evt) => {console.log("Connection closed.");};
    
    return (
        <div className="container mt-4">
            <div className="poh-card mt-4">
                <div className="card-body">
                    <h4 className="text-center"> {t('titulo')}</h4>
                    <span className="text-center">{t('desc')}</span>
                    <ul>
                        <li>{t('li-1')}</li>
                        <li>{t('li-2')}</li>
                    </ul>
                </div>
            </div>

            {
                ( !validWallet &&
                    <form onSubmit={ addWallet } >
                        <div className="row">
                            <div className="col-xs-12 col-md-8 col-lg-8">
                                    <input type="text" className="form-control mt-3" placeholder={t('urlwallet')} name="wallet" value={ wallet } onChange={ handleWalletInputChange } />
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-4">
                                    <input type="submit" className="btn btn-outline-warning mt-3 w-100" value={t('btn-wallet')} />
                            </div>
                        </div>
                    </form>
                )
            }
            

            {
                ( validWallet && 
                    <>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-4 text-center mt-4">
                            <div className="poh-card">
                            <i className="fas fa-universal-access fa-5x mt-3"></i>
                                <div className="card-body">
                                    <h5 className="card-title">{t('ubi-price')}</h5>
                                    <p className="card-text"> U$S { ubiPrice }</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 col-md-4 text-center mt-4">
                            <div className="poh-card">
                            <i className="fas fa-balance-scale fa-5x mt-3"></i>
                                <div className="card-body">
                                    <h5 className="card-title">{t('ubi-wallet')}</h5>
                                    <p className="card-text">{ ubiInWallet }</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 col-md-4 text-center mt-4">
                            <div className="poh-card">
                            <i className="fas fa-dollar-sign fa-5x mt-3"></i>
                                <div className="card-body">
                                    <h5 className="card-title">{t('ubi-dollar')}</h5>
                                    <p className="card-text"> U$S { (ubiInWallet * ubiPrice).toFixed(2) }</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-4 text-center mt-4">
                            <div className="poh-card">
                            <i className="fas fa-gas-pump fa-5x mt-3"></i>
                                <div className="card-body">
                                    <h5 className="card-title">{t('gas')}</h5>
                                    <p className="card-text"> { gasFastPrice }</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 col-md-4 text-center mt-4">
                            <div className="poh-card">
                            <i className="fas fa-burn fa-5x mt-3"></i>
                                <div className="card-body">
                                    <h5 className="card-title">{t('gas-uniswap')}</h5>
                                    <p className="card-text"> 105.657 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 col-md-4 text-center mt-4">
                            <div className="poh-card">
                            <i className="fas fa-file-invoice-dollar fa-5x mt-3"></i>
                                <div className="card-body">
                                    <h5 className="card-title">{t('swap-cost')}</h5>
                                    <p className="card-text"> U$S { (((gasFastPrice * 105657) / 1000000000) * ethereumPrice).toFixed(2) }</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-12 col-md-12 text-center mt-4">
                            <div className="poh-card">
                                <div className="card-body">
                                    <h5 className="card-title">{t('ganancia')}</h5>
                                    <p className="card-text"> U$S {( (ubiInWallet * ubiPrice).toFixed(2) - (((gasFastPrice * 105657) / 1000000000) * ethereumPrice).toFixed(2)).toFixed(2) }</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-12 col-md-12 text-center mt-4 mb-4">
                            <div className="poh-card">
                                <div className="card-body">
                                    <button className="btn btn-outline-warning w-100" onClick={ clearWallet }> {t('clean')} </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }

        </div>
    )
}
