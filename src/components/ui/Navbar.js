import React, { useEffect } from 'react';
import './navbar.css';    
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t } = useTranslation(['navbar']);
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
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/">{t('inicio')}</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="community">{t('comunidad')}</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/vote">{t('votaciones')}</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/profile-check">{t('verificarperfil')}</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="/gas-calculator">{t('calculadorcostos')}</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-danger" href="/link-address">{t('vincularcuenta')}</a></li>
                </ul>
                </div>
            </div>

        </nav>
    )
}
