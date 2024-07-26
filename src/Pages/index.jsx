import React, { useState, useEffect } from 'react';
import Router from './Router';
import Layout from '../Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { getCookie } from '../Authorization/CookieContainer';
import axios from 'axios';
import qs from 'qs';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    // User Info.
    const [userAccessToken, setUserAccessToken] = useState(null);
    const [userNickname, setUserNickname] = useState(null)
    const [selectedNation, setSelectedNation] = useState('korea');

    useEffect(() => {
      // AccessToken
      if (userAccessToken == null && getCookie('refreshToken') != null) {
        getAccessTokenFromRefreshTokenAPI()
      }

      // NEWS
      fetch(process.env.PUBLIC_URL + '/news_data.json')
        .then(response => response.json())
        .then(data => {
          // 데이터에서 필요한 필드만 추출하여 새로운 배열로 생성
          const extractedArticles = data.map(item => ({
            source: item.news_agency,
            headline: item.title,
            summary: item.summary,
            url: item.news_link,
            imgURL: item.image_link,
            datetime: item.time,
            content: item.news_content,
          }));
          setArticles(extractedArticles);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(()=> {
      if (userAccessToken == null && getCookie('refreshToken') != null) {
        getAccessTokenFromRefreshTokenAPI()
      }
    }, [userAccessToken])

    const getAccessTokenFromRefreshTokenAPI = () => {
      axios({
          method: 'POST',
          url: 'http://34.64.89.168:8000/account/token/refresh/',
          data: qs.stringify({
            refresh: getCookie('refreshToken')
          }),
          headers: {
              'content-type': 'application/x-www-form-urlencoded',
          },
      }).then((response) => {
          const result = response.data
          const accessToken = result.access
          setUserAccessToken(accessToken)
      })
    }


    return (
        <BrowserRouter>
            <Layout userAccessToken={userAccessToken}
                    userNickname={userNickname}
                    selectedNation={selectedNation}
                    setSelectedNation={setSelectedNation} >
                <Router articles={articles}
                        userAccessToken={userAccessToken}
                        userNickname={userNickname}
                        setUserAccessToken={setUserAccessToken}
                        setUserNickname={setUserNickname}
                        selectedNation={selectedNation}/>
            </Layout>
        </BrowserRouter>
    );
};

export default HomePage;