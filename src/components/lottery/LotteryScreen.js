import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { pohDetails, txDetails } from '../../helpers/fetch';
import './lottery.css';

export const LotteryScreen = () => {

  
  const [transactions, setTransactions] = useState([]);
  const [winner, setWinner] = useState(null);
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const symbol = 'UBI';
  const burnWallet = '0x000000000000000000000000000000000000dead';
  const ticketPrice = 100;
  

  const handleFileUpload = e => {

    const file = e.target.files[0];
    const reader = new FileReader();

    // Transformo el CSV para su lectura
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });

      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };

    reader.readAsBinaryString(file);
  }

  const processData = async dataString => {
    const lines = dataString.split(/\r\n|\n/);
    const tx = [];

    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if(row[0] !== ''){
        await delay(200);
        let details = await handleDataTX(row[1]);
        details.forEach(d => { tx.push(d);});
      }
    }

    const result = [];
    const map = new Map();
    for (const item of tx) {
        if(!map.has(item.id)){
            map.set(item.id, true);    // set any value to Map
            result.push({
                'id' : item.id,
                'wallet' : item.wallet,
                'date' : item.date,
                'amount' : item.amount,
                'tickets' : (item.amount/ticketPrice).toFixed(0)
            });
        }
    }

    setTransactions(result);
  }

  const handleDataTX = async ( data ) => {
    const resp = await txDetails(data);
    const body = await resp.json();
    const transacciones = body.result;
    const tx = [];

    if(transacciones === 'Error! Invalid address format'){
      console.log("Wallet invalida");
    }else{
    transacciones.forEach(e => {
      if(symbol === e.tokenSymbol && burnWallet === e.to){
        let validMonth = new Date().getMonth();
        let validYear = new Date().getFullYear();
        let txDate = new Date(1000*e.timeStamp);

        if(validYear === txDate.getFullYear() && validMonth === txDate.getMonth()){
          // Si entro aca significa que la wallet de quemado, el simbolo y la fecha son validos
          let amount = e.value / 1000000000000000000;
          tx.push({
            'id' : e.blockHash,
            'wallet' : e.from,
            'date' : new Date(1000 * e.timeStamp).toUTCString() ,
            'amount' : amount,
            'tickets' : (amount/ticketPrice)
          })

        }
        
      }
  });
    }

    

    return tx;
  };

  const handleLottery = async e => {
    let lottery = [];
    transactions.forEach(t => {
        for (let index = 0; index < t.tickets; index++) {
          lottery.push(t.wallet);
        }
    });
    const winner = await pohDetails(lottery[random(0,lottery.length - 1).toFixed(0)]);
    const body = await winner.json();

    console.log('Winner: ', body);

    if( body != null ){
      setWinner(body);
    }else{
      setWinner(null);
    }
    


  }

  const random = (mn, mx) => { 
    return Math.random() * (mx - mn) + mn; 
  }

  return (
    <div className="container mt-4">

    {winner !== null  &&
      (

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={winner.photo} className="card-img-top img-thumbnail" alt={winner.display_name} />
            </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title uppercase">{winner.display_name}</h5>
              <p className="card-text">Estado: {winner.status}</p>
              <p className="card-text">Wallet: {winner.eth_address}</p>
              <p className="card-text"><small className="text-muted"><a href={winner.profile} target="_blank" rel="noreferrer" >Visit profile</a></small></p>
              

            </div>
          </div>
          </div>
        </div>
        // <div className="container">
        //   <div className="card">
        //   <h1 className="text-center uppercase mt-4">{winner.display_name}</h1>
        //     <div className="container">
        //       <img src={winner.photo} className="card-img-top img-thumbnail img-size" alt={winner.display_name} />
        //     </div>
        //     <div className="col-xs-12 col-md-6 col-lg-6">
        //       <h5 className="text-center">{winner.display_name} - {winner.status}</h5>
        //       <p className="card-text">{winner.eth_address}</p>
        //       <a href={winner.profile} target="_blank" rel="noreferrer" className="btn btn-warning">Ir al perfil de Poh</a>
        //     </div>

        //   </div>
        // </div>





        // <div className="row">
        //     <div className="card">
        //   <div className="col-xs-12 col-md-6 col-lg-6">
        //     
        //   </div>
        //   </div>
        //   <div className="col-xs-12 col-md-6 col-lg-6">
        //   <div className="card">
        //             
        //               <h5 className="card-title">{winner.display_name} - {winner.status}</h5>
        //               <p className="card-text">{winner.eth_address}</p>
        //               <a href={winner.profile} target="_blank" rel="noreferrer" className="btn btn-warning">Ir al perfil de Poh</a>
        //             </div>
        //           </div>
        //   </div>
        //   </div>
     )
    }



      {transactions.length === 0 ?
        (
          <>
            <h3 className="text-center">Cargar archivo del sorteo</h3>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
          </>
        )
        :
        (
          <>
            <button className="btn btn-outline-secondary w-100 mb-3" onClick={ handleLottery } >Realizar sorteo</button>

            <h3 className="text-center mt-5">Resumen de los participantes</h3>
            <h5 className="text-center mb-3">Cantidad de UBI´s quemados: {transactions.reduce((totalUbiBurn, t) => totalUbiBurn + t.amount, 0)}</h5>
            <table className="table table-sm ">
              <thead>
                <tr>
                  <th scope="col">Transaction</th>
                  <th scope="col">Wallet</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Tickets</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(
                  tx => 
                    <tr key={ tx.id }>
                      <th>{ tx.id }</th>
                      <td>{ tx.wallet }</td>
                      <td>{ tx.amount }</td>
                      <td>{ tx.tickets }</td>
                    </tr>
                )}
              </tbody>
            </table>
          </>
      )
      }




    </div>
  );
}
