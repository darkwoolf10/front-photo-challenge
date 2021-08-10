import React from 'react';
import { Link } from "react-router-dom";
import Auth from '../common/Auth';
import Logout from '../common/Logout';

function Header() {
  let isAuth = Auth();

  return (
    <header className="App-header">
      <nav className="border fixed split-nav">
        <div className="nav-brand">
          <h3><Link to="/home">Photo Challenge</Link></h3>
        </div>
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <div className="collapsible-body">
            <ul className="inline">
              <li>
                {isAuth ? <Link to='/create-challenge'>Create challenge</Link> : <Link to='/login'>Login</Link>}
              </li>
              <Logout />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
