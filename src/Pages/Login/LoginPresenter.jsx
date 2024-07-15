import React from 'react';
import { Link } from 'react-router-dom';

import './login.scss'
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import GButton from '../../Componentts/GButton/GButton';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const LoginPresenter = ({register, handleSubmit, onValid, loginFailure}) => {
    return (
        <div className='form'>
            <h1>Log in</h1>
            <form className="basicLogin" onSubmit={handleSubmit(onValid)}>
                {/* ID */}
                <div className="id">
                    <div className="label">Email</div>
                    <input type='email'
                           {...register('email', {
                            required: true,
                            pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "이메일 형식에 맞지 않습니다."
                                     }
                           })} 
                           placeholder='you@example.com' />
                </div>
                {/* Password */}
                <div className="pw">
                    <div className="label">Password</div>
                    <input type='password'
                           {...register('password', { required: true })}
                           placeholder='At least 8 characters' />
                </div>
                {loginFailure ? <span className='errorMsg'>로그인에 실패하였습니다.</span> : <></>}
                {/* Button */}
                <div className="btn">
                    <GButton color='primary' type='submit'>Log In</GButton>
                    <Link to='/join'>
                        <GButton color='outlinePrimary'>Sign up</GButton>
                    </Link>
                </div>
            </form>
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