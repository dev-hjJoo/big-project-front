import React from 'react';
import { Link } from 'react-router-dom';
import GButton from '../../Componentts/GButton/GButton';
import './login.scss';

const JoinPresenter = ({ register, handleSubmit, checkEmail, checkNickname, error }) => {
    return (
        <div className='form'>
            <h1>Join</h1>
            <form className="basicLogin" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="name">
                    <div className="label">Name</div>
                    <input type='text' {...register('username')} placeholder='' required />
                </div>
                {/* Nickname */}
                <div className="nickname">
                    <div className="label">Nickname</div>
                    <input type='text' {...register('nickname')} placeholder='' required onBlur={(e) => checkNickname(e.target.value)} />
                </div>
                {/* Nationality */}
                <div className="nationality">
                    <div className="label">Nationality</div>
                    <input type='text' {...register('nationality')} placeholder='' required />
                </div>
                {/* Work At */}
                <div className="work_at">
                    <div className="label">Work At</div>
                    <input type='text' {...register('work_at')} placeholder='' required />
                </div>
                {/* Email */}
                <div className="id">
                    <div className="label">Email</div>
                    <input type='email' {...register('email')} placeholder='you@example.com' required onBlur={(e) => checkEmail(e.target.value)} />
                </div>
                {/* Password */}
                <div className="pw">
                    <div className="label">Password</div>
                    <input type='password' {...register('password')} placeholder='At least 8 characters' required />
                </div>
                {/* Terms and Conditions */}
                <div className='terms'>
                    <input type="checkbox" required />
                    I agree with <Link to=''>terms and conditions</Link>
                </div>

                {/* Error */}
                {error && <div style={{ color: 'red', fontWeight: 'bold' }} className="error">{error}</div>}

                {/* Button */}
                <div className="btn">
                    <GButton color='primary' type='submit'>Create Account</GButton>
                </div>
                <div className="backToLogin">
                    Already have an account? <Link to='/login'>Log in</Link>
                </div>
            </form>
        </div>
    );
};

export default JoinPresenter;