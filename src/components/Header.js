import React from 'react'
import logo from './logo.svg';


export const Header = () => {
    return (

        <nav className="navbar navbar-light">
            <span className="navbar-brand mb-0 h1">Budget Tracker<img src={logo} className="App-logo" alt="App Logo" />
            </span>
        </nav>
    )
}
