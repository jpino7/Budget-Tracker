import React, {useState} from 'react'

export const Form = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div>
                <h3>Add Transaction</h3>
                <form id="form">
                    <div className="form-control">
                        <label htmlFor="text">Transaction: </label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction Type" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount [ (-) Withdraw | (+) Deposit ]: </label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount"/>
                    </div>
                    <button className="addTransaction-btn">Add Transaction</button>
                </form>
            </div>
    )
}
