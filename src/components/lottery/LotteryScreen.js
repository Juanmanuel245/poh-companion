import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { blockDetails, txDetails } from '../../helpers/fetch';

export const LotteryScreen = () => {

  const [transactions, setTransactions] = useState([]);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleFileUpload = e => {

    const file = e.target.files[0];
    const reader = new FileReader();

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
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

    const list = [];
    const tx = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if(row[0] !== ''){
        await delay(1000);
        let details = await handleDataTX(row[1].substring(24,90));
        
        if(details != null){
          tx.push(details);
        }
      }

      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }

  const result = [];
  const map = new Map();
  for (const item of tx) {
      if(!map.has(item.id)){
          map.set(item.id, true);    // set any value to Map
          let dateString = item.date.getDay() + '/' + (item.date.getMonth() + 1) + '/' + item.date.getFullYear() + ' ' + item.date.getHours() + ':' + item.date.getMinutes()
          result.push({
              'id' : item.id,
              'wallet' : item.wallet,
              'date' : dateString,
              'amount' : item.amount
          });
      }
  }

  console.log('result: ', result);

    setTransactions(result);
    console.log('Finalize');
    console.log('transactions: ', transactions);
  }

  const handleDataTX = async ( data ) => {
    const resp = await txDetails(data);
    const body = await resp.json();
    const { from, value, hash, blockNumber } = body.result

    let hexa2dec = parseInt(value, 16);
    let amount = hexa2dec / 10000000000000000000;

    const resp2 = await blockDetails(blockNumber);
    const body2 = await resp2.json();
    const { timestamp } = body2.result
    let dateHexa2Dec = parseInt(timestamp, 16);
    let fecha = new Date(1000*dateHexa2Dec);
    let mesActual = new Date();

    // TODO - Modificar para que tome el (mesActual.getMonth() - 1)
    if(mesActual.getFullYear() === fecha.getFullYear() && ((mesActual.getMonth()) === fecha.getMonth())){
      return {
        'id' : hash,
        'wallet' : from,
        'date' : fecha,
        'amount' : amount
      }
    }else{
      return null
    }
  
  };


  const handleLottery = e => {

  }

  return (
    <div className="container mt-4">
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {
        transactions.length > 0 &&
                (
                    <div className="col-xs-12 col-md-12 col-md-12 mt-2 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <button className="btn btn-outline-secondary" onClick={ handleLottery } >Realizar sorteo</button>
                            </div>

                            <div className="card-body ">
                              <table className="table table-sm table-responsive">
                                <thead>
                                  <tr>
                                    <th scope="col">Transaction</th>
                                    <th scope="col">Wallet</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                      transactions.map(
                                        tx => 
                                            <tr key={ tx.id }>
                                              <th>{ tx.id }</th>
                                              <td>{ tx.wallet }</td>
                                              <td>{tx.date}</td>
                                              <td>{ tx.amount }</td>
                                            </tr>
                                      )
                                  }
                                </tbody>
                              </table>
                            </div>

                        </div>
                    </div>
                )
        }
    </div>
  );
}
