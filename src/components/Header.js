import React from 'react'
import Menu from './Menu'

import './Header.css'

function Header() {
    return (
        <header className ="bg-transparent">
            <div className="header border">
                <img className = "header__logo" src="./images/logo.png" alt="logo" />
                <i className="fas fa-bars menu__button"></i>
                <nav className = "header__nav">
                    <Menu />
                </nav>
            </div>
        </header>
    )
}

export default Header
