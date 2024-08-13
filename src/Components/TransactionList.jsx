import React, { useContext } from 'react';
import { Context } from '../Context';

const TransactionList = () => {
    const { dummyTransactions} = useContext(Context);
   
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {dummyTransactions.map(transaction => (
                    <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
                        {transaction.text}
                        <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
                        <button className="delete-btn">x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
