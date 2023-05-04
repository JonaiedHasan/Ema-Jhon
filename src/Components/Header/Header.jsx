import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="container-fluid">
            <div className='row align-items-center mt-5 mx-0'>
            <div className='col-md-6 header-text'>
              <h4>One Step <br /> Closer To Your <br /><span className='title-dream'>Dream Job</span></h4>
              <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <button className='btn-apply mt-3'>Get Started</button>
            </div>
            <div className='col-md-6 img-container '>
            <img className='img-fluid ' src="https://i.ibb.co/VtmYLFf/P3-OLGJ1-copy-1.png"/>
              
            </div>
        </div>
        </div>
    );
};

export default Header;