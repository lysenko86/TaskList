import React from 'react';
import './top-panel.css';

const TopPanel = () => {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#">TaskManager</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Увійти</a>
                </li>
            </ul>
        </nav>
    );
}

export default TopPanel;
