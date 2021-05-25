const apy_key = 'xxxxx';
const ubi_contract = '0xdd1ad9a21ce722c151a836373babe42c868ce9a4';

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


export {
    gasPrices,
    coinsPrices,
    ubiWallet
}