import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import { Newslleters } from './newsletters';

export const NewsletterScreen = () => {

    const { t } = useTranslation(['newsletter']);
    useEffect(() => {ReactGA.pageview('/newsletter');}, [])

    return (
        

        <div className="container">

        {
            Newslleters.map(
                newsletter => 
                <div className="col-xs-12 col-md-4 col-lg-3 mt-4" key={ newsletter.id } >
                    <div className="card text-center">
                        <img src={ newsletter.cover } className="card-img-top align-self-center" alt="Proof of humanity - Español" />
                        <div className="card-body">
                            <h5 className="card-title">{ newsletter.title }</h5>
                            <a href={newsletter.link} target="_blank" rel="noreferrer" className="btn btn-outline-warning w-100">{t('btn-ingresar')}</a>
                        </div>
                    </div>
                </div>
            )
        }
        </div>
          
    )
}
