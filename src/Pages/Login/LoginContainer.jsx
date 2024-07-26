import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../Authorization/CookieContainer';


const LoginContainer = ({setUserAccessToken, setUserNickname}) => {

    // variable
    const today = new Date()

    // state
    const [loginFailure, setLoginFailure] = useState(false)

    // navigate
    const navigate = useNavigate();

    // handler
    const {register, handleSubmit } = useForm()
    const onValid = (data) => {
        axios({
            method: 'POST',
            url: 'http://34.64.89.168:8000/account/login/',
            data: qs.stringify({
                email: data['email'],
                password: data['password'],
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            const result = response.data
            
            const accessToken = result['access']
            const refreshToken = result['refresh']
            
            // refreshToken -> Cookie
            if(accessToken){
                setCookie('refreshToken', refreshToken, 
                {
                    sameSite: 'strict',
                    path: '/',
                    // httpOnly: true,
                }
                );
            }

            // accessToken -> local variable
            setUserAccessToken(accessToken)

            // When login succeeds
            setUserNickname(result.nickname)
            console.log(result.nickname)
            setLoginFailure(false)

            // 로그인 성공 시 홈 화면으로 이동
            navigate('/')
        }).catch((error) => {
            setLoginFailure(true)
        })
    }

    return (
        <LoginPresenter register={register} 
                        handleSubmit={handleSubmit}
                        onValid={onValid} 
                        loginFailure={loginFailure}/>
    );
};

export default LoginContainer;