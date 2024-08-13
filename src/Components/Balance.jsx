import {React,useContext    }from 'react'
import { Context } from '../Context';


const Balance = () => {
    const { dummyTransactions} = useContext(Context);
    const amounts = dummyTransactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
        <>
        <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
        </div>
        </>
      
    </div>
  )
}

export default Balance
