import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header__section">
        <div className="header__left"></div>
        <div className="header__logo"></div>
        <div className="header__right">
        <ul  className="header__nav">
        <li className="header__link"><a href="#home">Home</a></li>
        <li  className="header__link"><a href="#news">News</a></li>
        <li  className="header__link"><a href="#contact">Contact</a></li>
        <li  className="header__link"><a className="header__active" href="#about">About</a></li>
        </ul>
        </div>
      </header>
    );
  }
}

export default Header;
