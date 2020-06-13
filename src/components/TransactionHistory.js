import React, { Component } from 'react'

export class TransactionHistory extends Component {
    render() {
        return (
            <div>
                <h3>Transaction History</h3>
                <ul id="history" class="history">
                    <li class="minus">
                        Cash <span>-$100</span><button class="delete-btn">Remove</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TransactionHistory
