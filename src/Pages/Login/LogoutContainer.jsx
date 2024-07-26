import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { removeCookie, getCookie } from '../../Authorization/CookieContainer';

const LogoutContainer = ({userAccessToken, setUserAccessToken, setUserNickname}) => {

    const navigate = useNavigate();
    // const [isLoggingOut, setLoggingOut] = useState(false)
    const [isLoggedOut, setLoggedOut] = useState(false);

    // 초기화 코드: 로그아웃 페이지 로딩 시 초기화
    useEffect(()=> {
        
        if (!isLoggedOut) {
            axios({
                method: 'POST',
                url: 'http://34.64.89.168:8000/account/logout/',
                data: qs.stringify({
                    refresh_token: getCookie('refreshToken')
                }),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userAccessToken}`
                },
            }).then((response) => {
                // const result = response.data  
                removeCookie('refreshToken')
                setUserAccessToken(null)
                setUserNickname('')
                setLoggedOut(true)
    
                // MARK: Cookie의 refreshToken 초기화 코드 추가
                
                navigate('/')
            }).catch((error) => {
                console.log(error)
            })
        }
    }, []);

    return (
        <span> Logging out ... </span>
    );
};

export default LogoutContainer;