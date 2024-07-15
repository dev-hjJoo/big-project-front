import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import { getCookie } from '../../Assets/CookieContainer';

const LogoutContainer = ({setUserAccessToken, setUserEmail}) => {

    const navigate = useNavigate();
    const [isLoggedOut, setLoggedOut] = useState(false);

    // 초기화 코드: 로그아웃 페이지 로딩 시 초기화
    useEffect(()=> {
        const refreshToken = getCookie('refreshToken')
        console.log('refreshToken2: ', refreshToken)
        axios({
            method: 'POST',
            url: 'http://34.64.89.168:8000/account/logout/',
            // data: qs.stringify({
            //     refresh_token: refreshToken
            // }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                authorization: `Bearer ${refreshToken}`
            },
        }).then((response) => {
            const result = response.data
            console.log(result)

            setUserAccessToken('')
            setUserEmail('')
            setLoggedOut(true)

            // MARK: Cookie의 refreshToken 초기화 코드 추가
            
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
        
    }, []);

    return (
        <span> Logging out ... </span>
    );
};

export default LogoutContainer;