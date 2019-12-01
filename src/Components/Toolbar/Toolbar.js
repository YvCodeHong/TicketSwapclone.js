import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">Ticketswap</a></div>
            <div className="toolbar_navigation-items"></div>
            <div>
                <ul>
                    <li><a href="/">How it works</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Sell tickets</a></li>
                </ul>
            </div>
         </nav>
    </header>
);

export default toolbar; 