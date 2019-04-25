import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = (props) => (
    <div className="container">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Books</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/books">Book</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Each smaller components */}
        {props.children}
    </div>
);

export default Header;
