import React, { useEffect } from 'react';
import './navbar.css';    
import ReactGA from 'react-ga';

export const Navbar = () => {

    useEffect(() => {ReactGA.initialize('UA-197549218-1');}, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light background-nav navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/#">Poh companion</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/">Inicio</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="community">Comunidad</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/vote">Votaciones</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/profile-check">Verificación de perfil</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/gas-calculator">Calculador de costos</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-danger" href="/link-address">Vincular cuenta</a></li>
                </ul>
                </div>
            </div>

        </nav>
    )
}
