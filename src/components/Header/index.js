import React from 'react';

import logo from '../../Icons/logo.svg';

import './header.styles.scss';

const Header = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
  </header>
);

export default Header;
