import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Herbalife Formula 1', amount: -48 },
        { id: 2, text: 'TRHC Pay', amount: 1500 },
        { id: 3, text: 'Sweet Sweat', amount: -25 },
        { id: 4, text: 'Herbalife Prolessa Duo', amount: -89 },
        { id: 5, text: 'Progressive Car Insurance', amount: -167 }
    ]
}

// Creating Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}
