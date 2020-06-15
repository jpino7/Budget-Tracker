import React from 'react'

export const Transaction = ({ transaction }) => {
    const transactionSymbol = transaction.amount < 0 ? '-' : '+';

    return (
        <li className="minus">
            {transaction.text} <span>{transactionSymbol}${Math.abs(transaction.amount)}</span>
        </li>
    )
}
