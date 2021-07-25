import React from 'react';

export const ResumeLotteryScreen = () => {

    return (
        <div className="container mt-4">
            <div className="card mt-4">
              <div className="card-body">
              <h3 className="text-center"> UBI Lottery </h3>
              </div>
            </div>

            <div className="mt-4 row">
              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-body">
                      <h3 className="text-center"> ¿Qué es?  </h3>
                      <span>
                      Ubi loterry es un sistema creado para el incentivo de la quema de ubis.  
                      Para esto, se realizan sorteos mensuales, dónde para participar, se exige la quema de mínimo 100 ubis, lo que te brinda 1 ticket para participar. Si deseas "comprar" 2 tickets, deberás quemar 200 ubis, y así sucesivamente. 
                      </span>
                    </div>
                  </div>
              </div>

              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center"> ¿Cómo funciona? </h3>
                    <span>
                    Para participar deberas enviar los ubis a una wallet determinada (burn) a la que nadie tiene acceso. Luego, copiar el link de tu wallet con la que realizaste la quema y pegarla en un form de Google, y listo! Ya estás participando!  
                    </span>
                  </div>
                  </div>
              </div>

            </div>
            <div className="mt-4 row">
              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-body">
                      <h3 className="text-center"> ¿Cómo se entregan los premios?  </h3>
                      <span>
                      La mayoría de los premios van a ser digitales, como subscripciónes a Netflix, amazon prime, HBO, Spotify, etc. El sorteo de realizará en vivo y será mediante un canal de discord. 
                      </span>
                    </div>
                  </div>
              </div>

              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="card">
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
                <div className="card">
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
