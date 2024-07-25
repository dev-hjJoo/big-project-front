import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import JoinPresenter from './JoinPresenter';

const JoinContainer = () => {
    const { register, handleSubmit, reset, setError } = useForm();
    const [error, setErrorState] = useState('');
    const navigate = useNavigate()

    const checkEmail = async (email) => {
        const formData = new FormData();
        formData.append('email', email);

        try {
            const response = await axios.post('http://34.64.89.168:8000/account/check-email/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200 && response.data.exists) {
                setError('email', { type: 'manual', message: 'Email already exists' });
                return false;
            }
            return true;
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                alert('Error checking email: Data is None');
            } else {
                alert('Error checking email.');
            }
            return false;
        }
    };

    const checkNickname = async (nickname) => {
        const formData = new FormData();
        formData.append('nickname', nickname);

        try {
            const response = await axios.post('http://34.64.89.168:8000/account/check-nickname/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200 && response.data.exists) {
                setError('nickname', { type: 'manual', message: 'Nickname already exists' });
                reset();
                return false;
            }
            return true;
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                alert('Error checking nickname: Data is None');
            } else {
                alert('Error checking nickname.');
            }
            return false;
        }
    };

    const verifyEmail = async (email) => {
        const formData = new FormData();
        formData.append('email', email);

        try {
            const response = await axios.post('http://34.64.89.168:8000/account/verify-email/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200) {
                alert('Email verification sent successfully');
                return true;
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                setError('email', { type: 'manual', message: 'Email verification failed' });
            } else {
                alert('Error sending email verification.');
            }
            return false;
        }
    };

    const onSubmit = async (data) => {
        const emailCheck = await checkEmail(data.email);
        if (!emailCheck) return;

        const nicknameCheck = await checkNickname(data.nickname);
        if (!nicknameCheck) return;

        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('username', data.username);
        formData.append('nickname', data.nickname);
        formData.append('nationality', data.nationality);
        formData.append('work_at', data.work_at);

        try {
            const response = await axios.post('http://34.64.89.168:8000/account/signup/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 201) {
                alert('Membership successful');
                await verifyEmail(data.email);
                reset();
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                setErrorState('Membership failure ' + error.response.data.message);
            } else {
                setErrorState('Membership failure: Server error');
            }
        }
    };

    return (
        <JoinPresenter 
            register={register} 
            handleSubmit={handleSubmit(onSubmit)} 
            checkEmail={checkEmail} 
            checkNickname={checkNickname} 
            error={error} 
        />
    );
};

export default JoinContainer;