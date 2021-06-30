const apy_key = 'xxxxx';
const ubi_contract = '0xdd1ad9a21ce722c151a836373babe42c868ce9a4';
const api_eth_scan = 'https://api.etherscan.io/api';

const gasPrices = ( method = 'GET' ) => {
    return fetch ( `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apy_key}` );
}

const coinsPrices = ( method = 'GET' ) => {
    return fetch ( `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cuniversal-basic-income&vs_currencies=usd` );
}

const ubiWallet = ( method = 'GET' ) => {
    const wallet = localStorage.getItem('wallet');
    return fetch ( `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${ubi_contract}&address=${wallet}&tag=latest&apikey=K2MUPCIMKXE124JMEY24GNBUHPTZCT6WNB` );
}

const txDetails = async ( tx, method = 'GET' ) => {
    return fetch ( `${api_eth_scan}?module=proxy&action=eth_getTransactionByHash&txhash=${tx}&apikey=${process.env.REACT_APP_ETHERSCAN_KEY}` );
}

const blockDetails = async ( tag, method = 'GET' ) => {
    return fetch ( `${api_eth_scan}?module=proxy&action=eth_getBlockByNumber&tag=${tag}&boolean=true&apikey=${process.env.REACT_APP_ETHERSCAN_KEY}` );
}

export {
    gasPrices,
    coinsPrices,
    ubiWallet,
    txDetails,
    blockDetails
}