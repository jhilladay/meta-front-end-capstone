import React from 'react';
import Nav from "./Nav";
import logo from '../assets/Logo.svg';

function Header() {
  return (
    <React.Fragment>
       <img src={logo} alt="logo"/>  <Nav />
    </React.Fragment>
  );
}

export default Header;