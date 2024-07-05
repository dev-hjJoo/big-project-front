import React from 'react';
import { Link } from 'react-router-dom';

import './login.scss'
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import GButton from '../../Componentts/GButton/GButton';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const JoinPresenter = () => {
    return (
        <div className='form'>
            <div className="title"><h1>Join</h1></div>
            <div className="basicLogin">
                {/* Name */}
                <div className="name">
                    <div className="label">Name</div>
                    <input type='text' placeholder=''/>
                </div>
                {/* ID */}
                <div className="id">
                    <div className="label">Email</div>
                    <input type='email' placeholder='you@example.com'/>
                </div>
                {/* Password */}
                <div className="pw">
                    <div className="label">Password</div>
                    <input type='password' placeholder='At least 8 characters'/>
                </div>
                {/* Terms and Conditions */}
                <div className='terms'>
                    <input type="checkbox" />
                    I agree with <Link to=''>terms and conditions</Link>
                </div>
                {/* Button */}
                <div className="btn">
                    <GButton color='primary'>Create Account</GButton>
                </div>
                <div className="backToLogin">
                    Already have an account? <Link to='/login'>Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default JoinPresenter;