import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           
            <nav>
                <Link to='home' >Home</Link>
                <Link to='about' >About Us</Link>
                <Link to='services' >Services</Link>
                <Link to='experts' >Experts</Link>
                <Link to='login' >Login</Link>
                <Link to='signUp' >Sign Up</Link>
            </nav>
        </div>
    );
};

export default Header;