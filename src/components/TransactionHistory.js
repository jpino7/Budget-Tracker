import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="history">
                {transactions.map(transaction => (<li className="minus">
                    {transaction.text} <span>-$100 </span><button className="delete-btn">Remove</button>
                </li>))}
                
            </ul>
        </div>
    )
}

export default TransactionHistory
