import React from 'react';
import './login.scss'
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import GButton from '../../Componentts/GButton/GButton';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const LoginPresenter = () => {
    return (
        <div className='form'>
            <div className="title"><h1>Log in</h1></div>
            <div className="basicLogin">
                {/* ID */}
                <div className="id">
                    <div className="label">ID</div>
                    <input type='email' />
                </div>
                {/* Password */}
                <div className="pw">
                    <div className="label">Password</div>
                    <input type='password' />
                </div>
                {/* Button */}
                <div className="btn">
                    <GButton color='primary'>Log In</GButton>
                    <GButton color='outlinePrimary'>Sign up</GButton>
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