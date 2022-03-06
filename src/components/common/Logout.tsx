import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  function logout() {
    localStorage.removeItem('access_token');
    console.log('logout');

    // location.reload();
  }

  return (
    <li><Link to='#' onClick={logout}>Logout</Link></li>
  );
}

export default Header;
