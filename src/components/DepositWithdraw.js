import React, { Component } from 'react'

export class DepositWithdraw extends Component {
    render() {
        return (
            <div className="dep-wd-container" >
                <div>
                    <h4>Deposit</h4>
                    <p className="depo-plus">+0.00</p>
                </div>
                <div>
                    <h4>Withdraw</h4>
                    <p className="wd-minus">-0.00</p>
                </div>
            </div>
        )
    }
}

export default DepositWithdraw
