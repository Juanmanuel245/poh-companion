import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import './profileCheck.css';
import { useTranslation } from 'react-i18next';
import '../../app.css';

export const ProfileCheckScreen = () => {
    const { t } = useTranslation(['profilecheck']);
    useEffect(() => {ReactGA.pageview('/profile-check');}, [])

    const [video, setVideo] = useState();
    const [type, setType] = useState();
    const [size, setSize] = useState();
    const [dimension, setDimension] = useState();
    const [duration, setDuration] = useState();

    const onChangeVideo = e => {
        setVideo(e.target.files[0]);
        let tam = ((e.target.files[0].size / 1024) / 1024).toFixed(2);

        if(tam <= 7){
            setSize({size: tam, icon: 'far fa-thumbs-up text-success', text: t('size-ok') });
        }else{
            setSize({size: tam, icon: 'far fa-thumbs-down text-danger', text: t('size-wrong')});
        }

        if(e.target.files[0].type === 'video/mp4' || e.target.files[0].type === 'video/webm'){
            setType({size: tam, icon: 'far fa-thumbs-up text-success', text: t('format-ok')});
        }else{
            setType({size: tam, icon: 'far fa-thumbs-down text-danger', text: t('format-wrong')});
        }
    };

    const onLoadMetadata = e => {
        if(e.target.videoHeight >= 352 && e.target.videoWidth >= 352){
            setDimension({ 
                            icon: 'far fa-thumbs-up text-success', 
                            text: '¡Dimensiones correctas!' });
        }else{
            setDimension({
                            icon: 'far fa-thumbs-down text-danger', 
                            text: `¡Dimensiones incorrectas! Minimo 640x360. (Tu video tiene ${e.target.videoHeight}x${e.target.videoWidth})` 
                        });
        }

        if(e.target.duration <= 120){
            setDuration({ icon: 'far fa-thumbs-up text-success', text: t('duracion-ok')  });
        }else{
            setDuration({
                            icon: 'far fa-thumbs-down text-danger', 
                            text: t('duracion-wrong') 
                        });
        }
    };

    function handleCleanVideo(e) {
        e.preventDefault();
        setVideo(null);
      }


    return (
        <div className="container">
            <div className="col-xs-12 col-md-12 col-md-12 mt-3">
                <div className="poh-card">
                    <div className="card-body text-center">
                        <h2>{t('titulo')}</h2>
                        <h6>{t('desc')}</h6>
                    </div>
                </div>
            </div>

            {
                !video &&
                (
                    <div className="col-xs-12 col-md-12 col-md-12 mt-3">
                        <div className="poh-card">
                            <div className="card-body text-center">
                                <input type="file" onChange={ onChangeVideo } />
                            </div>
                        </div>
                    </div>
                )
            }

            

            {
                video && 
                (
                    <div className="row">

                        <div className="col-xs-12 col-md-6 col-lg-9 mt-3">
                            <div className="poh-card">
                                <div className="card-body text-center">
                                    <video width="30%" onLoadedMetadata={e => onLoadMetadata(e) }>
                                        <source src={URL.createObjectURL(video)} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>  


                        {
                            dimension && 
                            (
                                <div className="col-xs-12 col-md-6 col-lg-3 mt-3">
                                    <div className="poh-card">
                                        <div className="card-body">
                                        <div className="animate__animated animate__fadeInDown animate__delay-1s"><i className={dimension.icon}></i> {dimension.text} </div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-2s"><i className={size.icon}></i> {size.text}</div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-3s"><i className={duration.icon}></i> {duration.text}</div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-4s"><i className={type.icon}></i> {type.text}</div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-5s mt-2">
                                            <button className="btn btn-outline-secondary" onClick={ handleCleanVideo } >{t('verificar-otro')}</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>   
                            )
                        }


                    </div>
                )
            }

            
        </div>

    )
}
