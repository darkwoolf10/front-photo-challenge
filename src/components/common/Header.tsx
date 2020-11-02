import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  let links;

  // if (isAuth === true) {
  //   links = <li><Link to='/create-challenge'>Create challenge</Link></li>;
  // }

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
              <li><Link to='/login'>Login</Link></li>
              {links}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
