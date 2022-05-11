import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="header__inner">
            <div className="header__left">
                <img src="./img/logo.svg" alt="" />
                <div className="header__left-words">
                    <h1 className="header__left-title">
                        React sneacers
                    </h1>
                    <p className="header__left-subtitle">
                        Best shoes shop
                    </p>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right-content">
                    <a href="#">
                        <img src="./img/cart.svg" alt="Cart" />
                    </a>
                    <div className="header__right-price">
                        263$
                    </div>
                </div>
                <a href="#" className='header__right-link'>
                    <img src="./img/heart.svg" alt="Favorites"/>
                </a>
                <a href="#">
                    <img src="./img/account.svg" alt="Account"/>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header