import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { DepositWithdraw } from './components/DepositWithdraw';
import { TransactionHistory } from './components/TransactionHistory';
import { Form } from './components/Form';



// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <DepositWithdraw />
        <TransactionHistory />
        <Form />
      </div>
    </div>
  );
}

export default App;
