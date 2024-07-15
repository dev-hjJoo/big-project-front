import React from 'react';
import { Link } from 'react-router-dom';
import GButton from '../../Componentts/GButton/GButton';

import './login.scss'


const JoinPresenter = () => {
    return (
        <div className='form'>
            <h1>Join</h1>
            <div className="basicLogin">
                {/* Name */}
                <div className="name">
                    <div className="label">Name</div>
                    <input type='text' placeholder='' required/>
                </div>
                {/* ID */}
                <div className="id">
                    <div className="label">Email</div>
                    <input type='email' placeholder='you@example.com' required/>
                </div>
                {/* Password */}
                <div className="pw">
                    <div className="label">Password</div>
                    <input type='password' placeholder='At least 8 characters' required/>
                </div>
                {/* Terms and Conditions */}
                <div className='terms'>
                    <input type="checkbox" required/>
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