import React, { useState } from 'react';
import './profileCheck.css';

export const ProfileCheckScreen = () => {

    const [video, setVideo] = useState();
    const [type, setType] = useState();
    const [size, setSize] = useState();
    const [dimension, setDimension] = useState();
    const [duration, setDuration] = useState();

    const onChangeVideo = e => {
        setVideo(e.target.files[0]);
        let tam = ((e.target.files[0].size / 1024) / 1024).toFixed(2);

        if(tam <= 7){
            setSize({size: tam, icon: 'far fa-thumbs-up text-success', text: '¡Tamaño correcto!' });
        }else{
            setSize({size: tam, icon: 'far fa-thumbs-down', text: '¡Tamaño incorrecto! Maximo 7 Megas.' });
        }

        if(e.target.files[0].type === 'video/mp4' || e.target.files[0].type === 'video/webm'){
            setType({size: tam, icon: 'far fa-thumbs-up text-success', text: '¡Formato correcto!' });
        }else{
            setType({size: tam, icon: 'far fa-thumbs-down', text: '¡Formato incorrecto! El video debe ser mp4 o webm' });
        }
    };

    const onLoadMetadata = e => {
        if(e.target.videoHeight >= 360 && e.target.videoWidth >= 360){
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
            setDuration({ icon: 'far fa-thumbs-up text-success', text: '¡Duración correcta!' });
        }else{
            setDuration({
                            icon: 'far fa-thumbs-down text-danger', 
                            text: `¡Duración incorrecta! Maximo 120 segundos. (Tu video tiene ${e.target.duration.toFixed(2)} segundos)` 
                        });
        }
    };

    function handleCleanVideo(e) {
        e.preventDefault();
        setVideo(null);
      }


    return (
        <div className="container">
            <div className="col-xs-12 col-md-12 col-md-12 mt-2">
                <div className="card">
                    <div className="card-body text-center">
                        <h2>Verificación de perfil</h2>
                        <h6>Selecciona tu video y el sistema te indicara si cumplis con las validaciones solicitadas</h6>
                    </div>
                </div>
            </div>

            {
                !video &&
                (
                    <div className="col-xs-12 col-md-12 col-md-12 mt-2">
                        <div className="card">
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

                        <div className="col-xs-12 col-md-6 col-lg-9 mt-2">
                            <div className="card">
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
                                <div className="col-xs-12 col-md-6 col-lg-3 mt-2">
                                    <div className="card">
                                        <div className="card-body">
                                        <div className="animate__animated animate__fadeInDown animate__delay-1s"><i className={dimension.icon}></i> {dimension.text} </div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-2s"><i className={size.icon}></i> {size.text}</div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-3s"><i className={duration.icon}></i> {duration.text}</div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-4s"><i className={type.icon}></i> {type.text}</div>
                                        <div className="animate__animated animate__fadeInDown animate__delay-5s mt-2">
                                            <button className="btn btn-outline-secondary" onClick={ handleCleanVideo } >Verificar otro video</button>
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
