const api_poh_justin = 'https://api.poh.dev';

const pohDetails = async ( wallet, method = 'GET' ) => {
    const action = 'profiles';
    return fetch ( `${api_poh_justin}/${action}/${wallet}` );
}

export {
    pohDetails
}