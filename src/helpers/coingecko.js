const coinsPrices = ( method = 'GET' ) => {
    return fetch ( `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cuniversal-basic-income&vs_currencies=usd` );
}

export {
    coinsPrices
}