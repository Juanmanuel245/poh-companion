const apy_key = 'xxxxx';
const ubi_contract = '0xdd1ad9a21ce722c151a836373babe42c868ce9a4';
const api_eth_scan = 'https://api.etherscan.io/api';

const gasPrices = ( method = 'GET' ) => {
    return fetch ( `${api_eth_scan}?module=gastracker&action=gasoracle&apikey=${apy_key}` );
}

const ubiWallet = ( method = 'GET' ) => {
    const wallet = localStorage.getItem('wallet');
    const module = 'account';
    return fetch ( `${api_eth_scan}?module=${module}&action=tokenbalance&contractaddress=${ubi_contract}&address=${wallet}&tag=latest&apikey=K2MUPCIMKXE124JMEY24GNBUHPTZCT6WNB` );
}

const txDetails = async ( address, method = 'GET' ) => {
    const module = 'account';
    const action = 'tokentx';
    return fetch ( `${api_eth_scan}?module=${module}&action=${action}&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${process.env.REACT_APP_ETHERSCAN_KEY}` );
}


const blockDetails = async ( tag, method = 'GET' ) => {
    return fetch ( `${api_eth_scan}?module=proxy&action=eth_getBlockByNumber&tag=${tag}&boolean=true&apikey=${process.env.REACT_APP_ETHERSCAN_KEY}` );
}

export {
    gasPrices,
    ubiWallet,
    txDetails,
    blockDetails
}