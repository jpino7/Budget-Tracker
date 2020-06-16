import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { DepositWithdraw } from './components/DepositWithdraw';
import { TransactionHistory } from './components/TransactionHistory';
import { Form } from './components/Form';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
   
    <GlobalProvider>
      <Header />
      <div className="container" >
        <Balance />
        <DepositWithdraw />
        <Form />
        <TransactionHistory />
      </div>
    </GlobalProvider>
  );
}

export default App;
