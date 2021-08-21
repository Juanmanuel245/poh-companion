import React from 'react';
import '../../app.css';
export const ResumeLotteryScreen = () => {

    return (
        <div className="container mt-4">
            <div className="poh-card mt-4">
              <div className="card-body">
              <h3 className="text-center"> UBI Lottery </h3>
              </div>
            </div>

            <div className="mt-4 row">
              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="poh-card">
                    <div className="card-body">
                      <h3 className="text-center"> ¿Qué es?  </h3>
                      <span>
                      Ubi lottery es un sistema creado para el incentivo de la quema de ubis.  
Para esto, se realizan sorteos mensuales, dónde para participar, se exige la quema de mínimo 100 ubis, lo que te brinda 1 ticket para participar. Si deseas "comprar" 2 tickets, deberás quemar 200 ubis, y así sucesivamente.  
                      </span>
                    </div>
                  </div>
              </div>

              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="poh-card">
                  <div className="card-body">
                    <h3 className="text-center"> ¿Cómo funciona? </h3>
                    <span>
                    Para participar deberás enviar los ubis a una wallet determinada (0x000000000000000000000000000000000000dEaD) a la que nadie tiene acceso, conocida como wallet burn. Luego, copiar la eth wallet (ej.: 0x6986E8C8Da3...) con la que se realizó la transacción y pegarla en un form de Google, y listo! Ya estás participando!   
                    </span>
                  </div>
                  </div>
              </div>

            </div>
            <div className="mt-4 row">
              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="poh-card">
                    <div className="card-body">
                      <h3 className="text-center"> ¿Cómo se entregan los premios?  </h3>
                      <span>
                      La mayoría de los premios van a ser digitales, como suscripciones a Netflix, Amazon prime, HBO, Spotify, etc. El sorteo de realizará en vivo y será mediante un canal de YouTube (https://www.youtube.com/channel/UCqHr6VofPC6oG6cAbE4Q-0g) 
                      </span>
                    </div>
                  </div>
              </div>

              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="poh-card">
                  <div className="card-body">
                    <h3 className="text-center"> ¿Porque se hace esto?  </h3>
                    <span>
                    La quema de ubis, significa sacarlos de circulación. Esto haría un aumento en la demanda, y por consecuencia, un aumento del valor del ubi. Lo mismo (a menor escala) que realiza el vault. Quemar ubis.
                    </span>
                  </div>
                  </div>
              </div>

            </div>
    
            <div className="mt-4 mb-4 row">
              <div className="col-xs-12 col-md-12 col-lg-12">
                <div className="poh-card">
                    <div className="card-body">
                      <h3 className="text-center"> ¿Quién puede participar? </h3>
                      <span>
                        Todo aquel humano que este registrado en Proof of Humanity. Este es un requisito necesario para validar la identidad a la hora de entregar el premio. (Se hará una videollamada entre el organizador del evento y el ganador).
                      </span>
                    </div>
                  </div>
              </div>
            </div>
              

            <div className="mt-4 mb-4 row">
              <div className="col-xs-12 col-md-12 col-lg-12">
                <div className="poh-card">
                    <div className="card-body">
                      <h3 className="text-center"> Estado del proyecto </h3>
                      <span>
                        El estado de UBI Lottery es BETA, por lo que las novedades y los sorteos que se realicen se van a organizar desde <a href="https://t.me/ubilottery"> el siguiente canal de telegram </a>, El organizador es "Valen. En futuras versiones se realizará todo desde esta misma web."
                      </span>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    )
}
