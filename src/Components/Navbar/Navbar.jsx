import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
       <div className='div'>
         <div className='nav-container container d-flex  justify-content-between'>
          <h3>WorkWander</h3>
          <div className='nav-a'>
          <Link to='/'>Home</Link>
          <Link to='/Statistics'>Statistics</Link>
          <Link to='/appliedjobs'>Applied Jobs</Link>
          <Link to='/blog'>Blog</Link>
        </div>
        <button className='btn-apply'><h6>Start Applying</h6></button>
        </div>
       </div>
    );
};

export default Navbar;