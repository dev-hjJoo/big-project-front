import React, { useState, useEffect } from 'react';
import Router from './Router';
import Layout from '../Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    // User Info.
    const [userAccessToken, setUserAccessToken] = useState('');
    const [userEmail, setUserEmail] = useState('')

    useEffect(() => {
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


    return (
        <BrowserRouter>
            <Layout userAccessToken={userAccessToken}
                    userEmail={userEmail}>
                <Router articles={articles}
                        setUserAccessToken={setUserAccessToken}
                        setUserEmail={setUserEmail}/>
            </Layout>
        </BrowserRouter>
    );
};

export default HomePage;