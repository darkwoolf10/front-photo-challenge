import React from 'react';

function Header() {
    return (
        <header className="App-header">
            <nav className="border fixed split-nav">
                <div className="nav-brand">
                    <h3><a href="#">Photo Challenge</a></h3>
                </div>
                <div className="collapsible">
                    <input id="collapsible1" type="checkbox" name="collapsible1" />
                    <div className="collapsible-body">
                        <ul className="inline">
                            <li><a href="#">Create challenge</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
