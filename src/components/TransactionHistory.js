import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'


export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="row mx-auto">
            <div className="transactionHistory">
                <ul className="history">
                    <h3>Transaction History</h3>
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                </ul>
            </div>
        </div>
    )
}

export default TransactionHistory
