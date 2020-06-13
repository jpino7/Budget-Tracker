import React, { Component } from 'react'

export class DepositWithdraw extends Component {
    render() {
        return (
            <div class="dep-wd-container" >
                <div>
                    <h4>Deposit</h4>
                    <p id="depo-plus" class="depo-plus">+0.00</p>
                </div>
                <div>
                    <h4>Withdraw</h4>
                    <p id="wd-minus" class="wd-minus">-0.00</p>
                </div>
            </div>
        )
    }
}

export default DepositWithdraw
