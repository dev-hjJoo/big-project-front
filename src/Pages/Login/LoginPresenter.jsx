import React from 'react';
import { Link } from 'react-router-dom';

import './login.scss'
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import GButton from '../../Componentts/GButton/GButton';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const LoginPresenter = () => {
    return (
        <div className='form'>
            <h1>Log in</h1>
            <div className="basicLogin">
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
                {/* Button */}
                <div className="btn">
                    <GButton color='primary'>Log In</GButton>
                    <Link to='/join'>
                        <GButton color='outlinePrimary'>Sign up</GButton>
                    </Link>
                </div>
            </div>
            <Divider/>
            <div className="snsLogin">
                Or
                <GButton> 
                    <FontAwesomeIcon icon={faGoogle} style={{color: '#EA4435'}} />
                    Google Login
                </GButton>
                <GButton color='yellow'> 
                    <FontAwesomeIcon icon={faComment}/>
                    Kakao Login
                </GButton>
            </div>
        </div>
    );
};


export default LoginPresenter;