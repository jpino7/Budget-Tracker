import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Form = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div className="row mx-auto">
            <div className="addTransaction">
                <h3>Add Transaction</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="text">Transaction: </label>
                        <input className="form-control" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount [ (-) Withdraw | (+) Deposit ]: </label>
                        <input className="form-control" type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
                    </div>
                    <button className="addTransaction-btn btn btn-success">Add Transaction</button>
                </form>
            </div>
        </div>
    )
}
