import React from 'react'

export const Form = () => {
    return (
        <div>
                <h3>Add Transaction</h3>
                <form id="form">
                    <div className="form-control">
                        <label htmlFor="text">Transaction: </label>
                        <input type="text" placeholder="Enter Transaction Type" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount [ (-) Withdraw | (+) Deposit ]: </label>
                        <input type="number" placeholder="Enter Amount"/>
                    </div>
                    <button className="addTransaction-btn">Add Transaction</button>
                </form>
            </div>
    )
}
