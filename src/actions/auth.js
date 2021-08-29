import Swal from "sweetalert2";
import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (username, password) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'auth', { username, password }, 'POST');
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem('token', body.token );
            localStorage.setItem('role', body.role );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({ uid: body.uid, role: body.role }) )
        } else {
            Swal.fire('Error',body.msg, 'error');
        }

    }
}


export const startChecking = () => {
    return async(dispatch) => {
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();
        if ( body.ok ){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                user: body.user,
                role: body.role
            }))

            

        } else {
            dispatch( checkingFinish() );
        }
        
        
    }
};

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );

    }
};


const logout = () => ({ type: types.authLogout });

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});