import React from 'react';
import './SingleJob.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot,faDollarSign} from '@fortawesome/free-solid-svg-icons'

const SingleJob = ({ job }) => {
    const { jobTitle, id, companyLogo, companyName, jobType, jobTime, location, salary } = job;
    return (
        <div className='cart col-md-5 mx-auto' >
            <img className='company-logo img-fluid mb-4' src={companyLogo} alt="" />
            <h4 className='job-title'>{jobTitle}</h4>
            <h5 className='light-dark'>{companyName}</h5>
            <div className='d-flex gap-2'>
                <div>
                    <h6 className='job-T-T'>{jobType}</h6>
                </div>
                <div>
                    <h6 className='job-T-T'>{jobTime}</h6>
                </div>
            </div>
            <div className='d-flex gap-4'>
                <h5 className='light-dark'><FontAwesomeIcon icon={ faLocationDot} />     {location}</h5>
                <h5 className='light-dark'><FontAwesomeIcon icon={ faDollarSign} />   Salary: {salary}</h5>
            </div>

            <Link to={`/details/${id}`}><button className='btn-details'>View Details</button></Link>
        </div>

    );
};

export default SingleJob;