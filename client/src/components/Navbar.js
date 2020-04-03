import React from 'react';
import {Link} from 'react-router-dom';
import '../css/navbar.css';
const Navbar=()=>{
    return(
        <div className="navbar">    
        <ul class="bar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/start">Start Now</Link></li>
        <li><a href="#">Github</a>
        </li>
        <li><a href="#">Instagram</a>
        </li>
        </ul>
        </div>
    );
}

export default Navbar;