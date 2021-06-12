import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import { Voting }  from './voting.js';

export const VoteScreen = () => {
    const { t } = useTranslation(['vote']);
    useEffect(() => {ReactGA.pageview('/vote');}, [])

    return (
        <div className="container">

            <div className="col-xs-12 col-md-12 col-md-12 mt-4">
                <div className="card">
                    <div className="card-body text-center">
                        <h2>{t('titulo')}</h2>
                        <span>{t('titulo-desc')}</span>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    Voting.map(
                        vote => 
                        <>
                            { vote.active && 
                                <div className="col-xs-12 col-md-12 col-lg-12 mt-4" key={vote.id}>
                                    <div className="card border-success">
                                    <div className="card-header"><span className="badge bg-success">{t('votacion-activa')}</span></div>
                                        <div className="card-body">
                                            <h1 className="card-title text-center">{ vote.hip }</h1>
                                            <h5 className="card-title text-center">{ vote.name }</h5>
                                            <p className="card-text">
                                                <h2 className="mt-4">{t('descripcion')}</h2>
                                                { vote.desc }
                                                <h2 className="mt-4">{t('motivacion')}</h2>
                                                { vote.motivation }
                                            </p>
                                            <a href={vote.link} className="btn btn-outline-warning w-100">{t('btn-votar')}</a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    )
                }
            </div>

            <div className="row">
                {
                    Voting.map(
                        vote => 
                        <>
                            { !vote.active && 
                                <div className="col-xs-12 col-md-12 col-lg-6 mt-4" key={vote.id}>
                                    <div className="card border-danger">
                                    <div className="card-header"><span className="badge bg-danger">{t('votacion-finalizada')}</span></div>
                                        <div className="card-body">
                                            <h1 className="card-title text-center">{ vote.hip }</h1>
                                            <h5 className="card-title text-center">{ vote.name }</h5>
                                            <p className="card-text">
                                                <h2 className="mt-4">{t('descripcion')}</h2>
                                                <span> { vote.desc } </span>
                                                <h2 className="mt-4">{t('motivacion')}</h2>
                                                <span> { vote.motivation } </span>
                                                    <div className="row mt-4">
                                                    <div className="col-xs-12 col-md-6 col-lg-6 text-center text-success">
                                                        <h5>{t('voto-positivo')}</h5>
                                                        <span>{vote.result_yes} %</span>
                                                    </div>
                                                    <div className="col-xs-12 col-md-6 col-lg-6 text-center text-danger">
                                                        <h5>{t('voto-negativo')}</h5>
                                                        <span>{vote.result_no} %</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <a href={vote.link} className="btn btn-outline-warning w-100">{t('btn-votar')}</a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}
