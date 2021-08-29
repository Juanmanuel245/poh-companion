import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({ username: '', password: '' });
    const { username, password } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( username, password ) );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <h3 className="text-center">Ingresar en el sistema</h3>
                <form onSubmit={ handleLogin } >
                    <div className="form-group">
                        <input type="text" className="form-control mt-3" placeholder="Username" name="username" value={ username } onChange={ handleLoginInputChange } />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control mt-3" placeholder="Password" name="password" value={ password } onChange={ handleLoginInputChange } />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-warning w-100" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}