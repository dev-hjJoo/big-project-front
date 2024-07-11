import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GBox from '../../Componentts/GBox/GBox';
import GButton from '../../Componentts/GButton/GButton';
import './BoardList.scss';

const BoardList = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    const loadPosts = () => {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        savedPosts.sort((a, b) => b.id - a.id); // 최신 순으로 정렬
        setPosts(savedPosts);
    };

    useEffect(() => {
        loadPosts();
        window.addEventListener('storage', loadPosts); // Listen for storage changes
        return () => {
            window.removeEventListener('storage', loadPosts); // Cleanup
        };
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className='Board-Head'>
                <h1>Community</h1>
            </div>
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
                            <div className="no">{index+1}</div>
                            <Link to={`/community/detail/${post.id}`}>
                                <div className='title'>{post.title}</div>
                            </Link>
                            <div className='author'>{post.author}</div>
                            <div className='created-at'>{post.created_at}</div>
                            <div className='views'>{post.views}</div>
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

