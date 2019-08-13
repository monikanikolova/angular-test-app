import React from 'react';
import { Link } from 'react-router-dom';


 const Navbar = ({ match }) => {
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo"> React Angular Test </Link>
                    <ul className="right">
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/angular"> Angular</Link></li>
                        <li><Link to="/angular-two"> Angular 2</Link></li>

                    </ul>
                </div>
            </nav>  
    );
};

export default Navbar;