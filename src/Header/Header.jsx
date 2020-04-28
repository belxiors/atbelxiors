import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="header-container">
    <h2> Welcome </h2>
    <nav className="nav-header">
      <a href="/">Home</a>
      <a href="/">Articles</a>
      <a href="/">Apps</a>
      <a href="/">About</a>
    </nav>
  </div>
);

export default Header;
