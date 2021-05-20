import React, { useEffect, useState } from 'react'
import { gasPrices } from '../../helpers/fetch';

export const GascalculatorScreen = () => {

    const [gasFastPrice, setGasFastPrice] = useState([]);
    const [gasRapidPrice, setGasRapidPrice] = useState([]);
    const [gasLowPrice, setGasLowPrice] = useState([]);

    useEffect(() => {
        async function getGasPrices() {
            const resp = await gasPrices();
            const body = await resp.json();
            setGasRapidPrice(body.result.FastGasPrice);
            setGasFastPrice(body.result.ProposeGasPrice);
            setGasLowPrice(body.result.SafeGasPrice);
        }
        getGasPrices();
      }, []);

    return (
        <div>
            <section>
                <div><span>Rapid:</span><b> { gasFastPrice } </b></div>
                <div><span>Fast:</span><b> { gasRapidPrice } </b></div>
                <div><span>Low:</span><b> { gasLowPrice } </b></div>
            </section>
</div>

    )
}
