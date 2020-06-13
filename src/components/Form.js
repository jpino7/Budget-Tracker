import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <h3>Add Transaction</h3>
                <form id="form">
                    <div class="form-control">
                        <label for="text">Transaction: </label>
                        <input type="text" id="text" placeholder="Enter Transaction Type" />
                    </div>
                    <div class="form-control">
                        <label for="amount">Amount [ (-) Withdraw | (+) Deposit ]: </label>
                        <input type="number" id="amount" placeholder="Enter Amount"/>
                    </div>
                    <button class="addTransaction-btn">Add Transaction</button>
                </form>
            </div>
        )
    }
}

export default Form
