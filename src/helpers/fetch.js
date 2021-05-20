const apy_key = 'xxxxx';

const gasPrices = ( method = 'GET' ) => {
    return fetch ( `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apy_key}` );
}

const coinsPrices = ( method = 'GET' ) => {
    return fetch ( `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cuniversal-basic-income&vs_currencies=usd` );
}


export {
    gasPrices,
    coinsPrices
}