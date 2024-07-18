import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GButton from '../../Componentts/GButton/GButton';
import './board.scss';

const BoardList = ({userAccessToken}) => {
    const [posts, setPosts] = useState([]); // 게시글 목록 상태
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const postsPerPage = 8; // 페이지당 게시글 수

    // 게시글을 백엔드 서버에서 가져오는 함수
    const loadPosts = () => {
        axios({
            method: 'GET',
            url: 'http://34.64.89.168:8000/community/articles/',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${userAccessToken}` // 인증 토큰 추가
            },
        }).then((response) => {
            console.log('Using token:', userAccessToken); // 토큰 디버깅용 로그
            const result = response.data;
            console.log(result, "결과");
            result.sort((a, b) => b.id - a.id); // 최신 순으로 정렬
            setPosts(result); // 상태에 게시글 목록 저장
        }).catch((error) => {
            console.error('게시글을 가져오는 중 오류 발생:', error); // 오류 처리
        });
    };

    // 컴포넌트가 마운트될 때와 스토리지 변경 시 게시글을 다시 로드
    useEffect(() => {
        loadPosts(); // 초기 로드
        window.addEventListener('storage', loadPosts); // 스토리지 변경 감지
        return () => {
            window.removeEventListener('storage', loadPosts); // 클린업
        };
    }, []);

    // 날짜와 시간을 포맷팅하는 함수   !! 추후에 변경 예정
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}시 ${minutes}분 ${seconds}초`;
    };

    // 현재 페이지에 해당하는 게시글을 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 함수
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className='Board-body'>
                <ul>
                    <li className='list-header'>
                        <div className="header-item"></div>
                        <div className='header-item'>글 제목</div>
                        <div className='header-item'>작성자</div>
                        <div className='header-item'>작성일</div>
                        <div className='header-item'>조회수</div>
                    </li>
                    {currentPosts.map((post, index) => (
                        <li key={post.id} className='list-contents'>
                            <div className="no">{posts.length - (indexOfFirstPost + index)}</div>
                            <Link to={`/community/detail/${post.id}`}>
                                <div className='title'>{post.title}</div>
                            </Link>
                            <div className='author'>{post.user.username}</div>
                            <div className='created-at'>{formatDate(post.created_at)}</div>
                            <div className='views'>{post.view}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/community/write" className="button-link">
                <GButton color="outlinePrimary" hover='hover'>글 작성</GButton>
            </Link>
            <div className="pagination">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
                    <GButton key={i + 1} onClick={() => paginate(i + 1)} active={i + 1 === currentPage}>
                        {i + 1}
                    </GButton>
                ))}
            </div>
        </>
    );
};

export default BoardList;