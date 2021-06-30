import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './community.css';
import { Communities } from './communities.js';
import { useTranslation } from 'react-i18next';

export const CommunityScreen = () => {
    const { t } = useTranslation(['community']);
    useEffect(() => {ReactGA.pageview('/community');}, [])

    return (
        <div className="container">

            <div className="col-xs-12 col-md-12 col-md-12 mt-4">
                <div className="card">
                    <div className="card-body text-center">
                        <h2>{t('titulo')}</h2>
                        <h6>{t('descripcion')}</h6> 
                    </div>
                </div>
            </div>

            <div className="row text-center">
                {
                    Communities.map(
                        comunidad => 
                        <div className="col-xs-12 col-md-4 col-lg-3 mt-4" key={comunidad.id }>
                            <div className="card text-center">
                                <img src={ comunidad.logo } className="card-img-top img-rounded mt-2 align-self-center" alt="Proof of humanity - Español" />
                                <div className="card-body">
                                    <h5 className="card-title">{ comunidad.name }</h5>
                                    <p className="card-text">{ comunidad.desc }</p>
                                    <a href={comunidad.link} className="btn btn-outline-warning w-100">{t('btn-ingresar')}</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
