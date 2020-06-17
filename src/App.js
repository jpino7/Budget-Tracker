import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { DepositWithdraw } from './components/DepositWithdraw';
import { Form } from './components/Form';
import { TransactionHistory } from './components/TransactionHistory';
import { Footer } from './components/Footer';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (

    <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <DepositWithdraw />
          <Form />
          <TransactionHistory />
        </div>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
