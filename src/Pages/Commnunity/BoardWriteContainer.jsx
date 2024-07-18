import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BoardWritePresenter from './BoardWritePresenter';
import qs from 'qs';
import './board.scss';

const BoardWriteContainer = ({ userAccessToken }) => {
    const [title, setTitle] = useState(''); // 제목 상태
    const [content, setContent] = useState(''); // 내용 상태
    const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 객체

    // 게시글을 백엔드 서버에 저장하는 함수
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            title: title,
            content: content,
            category: 1 // 카테고리 값을 상수 1로 설정
        };
        console.log('Submitting post data:', postData); // 디버깅용 로그

        try {
            const response = await axios({
                method: 'POST',
                url: 'http://34.64.89.168:8000/community/articles/create/', // API 엔드포인트
                data: qs.stringify(postData), // 데이터를 쿼리 스트링으로 변환
                headers: {
                    'content-type': 'application/x-www-form-urlencoded', // 헤더 설정
                    Authorization: `Bearer ${userAccessToken}` // 인증 토큰 추가
                },
            });
            console.log('Post submitted successfully:', response.data); // 디버깅용 로그
            navigate('/community/list'); // 게시글 작성 후 BoardList 페이지로 이동
        } catch (error) {
            console.error('게시글을 저장하는 중 오류 발생:', error); // 오류 처리
            if (error.response) {
                console.error('Error response status:', error.response.status); // 상태 코드 로그
                console.error('Error response headers:', error.response.headers); // 헤더 로그
                console.error('Error response data:', error.response.data); // 응답 데이터 로그
            }
            console.error('Error config:', error.config); // 설정 로그
        }
    };

    return (
        <BoardWritePresenter
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            handleSubmit={handleSubmit}
        />
    );
};

export default BoardWriteContainer;