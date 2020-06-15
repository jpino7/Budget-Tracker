import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const DepositWithdraw = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const deposit = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const withdraw = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);


    return (
        <div className="dep-wd-container" >
            <div>
                <h4>Deposit</h4>
    <p className="depo-plus">{deposit}</p>
            </div>
            <div>
                <h4>Withdraw</h4>
    <p className="wd-minus">{withdraw}</p>
            </div>
        </div>
    )
}

export default DepositWithdraw
