import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GBox from '../../Componentts/GBox/GBox';
import GButton from '../../Componentts/GButton/GButton';
import './BoardDetail.scss';

const BoardDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const [post, setPost] = useState(
        savedPosts.find(post => post.id === parseInt(id)) || { comments: [] }
    );

    const [commentContent, setCommentContent] = useState('');
    const [commentAuthor, setCommentAuthor] = useState('');

    useEffect(() => {
        // 조회수 증가
        if (post) {
            const updatedPost = { ...post, views: post.views + 1 };
            const updatedPosts = savedPosts.map(p => (p.id === updatedPost.id ? updatedPost : p));
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            setPost(updatedPost);
        }
    }, [id]); // post ID 바뀔때만 작동

    const handleDelete = () => {
        const updatedPosts = savedPosts.filter(p => p.id !== post.id);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        navigate('/community/list'); // 삭제 후 목록 페이지로 이동
    };

    const addComment = () => {
        const newComment = { author: commentAuthor, content: commentContent };
        const updatedPost = { ...post, comments: [...(post.comments || []), newComment] };
        const updatedPosts = savedPosts.map(p => (p.id === updatedPost.id ? updatedPost : p));
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPost(updatedPost); // 상태 업데이트
        setCommentContent(''); // 댓글 입력 필드 초기화
        setCommentAuthor(''); // 작성자 입력 필드 초기화
    };

    const deleteComment = (index) => {
        const updatedComments = post.comments.filter((_, i) => i !== index);
        const updatedPost = { ...post, comments: updatedComments };
        const updatedPosts = savedPosts.map(p => (p.id === updatedPost.id ? updatedPost : p));
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPost(updatedPost); // 상태 업데이트
    };

    if (!post) {
        return <GBox size="large">Post not found</GBox>;
    }

    return (
        <GBox size="large">
            <div className="board-detail">
                <h1>{post.title}</h1>
                <h3 style={{ textAlign: 'right' }}>글 작성자: {post.author} &nbsp;&nbsp;&nbsp;&nbsp;👀: {post.views}</h3>
                <div className='board-content'>
                    <p>{post.content}</p>
                </div>
            </div>
            <div className='comment-detail'>
                <h2>댓글</h2>
                <GBox size="small">
                    {post.comments && post.comments.length > 0 ? (
                        <ul>
                            {post.comments.map((comment, index) => (
                                <li key={index} className="comment-item">
                                    <p className="comment-content">{comment.content} <span className="comment-author">작성자: {comment.author}</span></p>
                                    <button className="button3" onClick={() => deleteComment(index)}>댓글 삭제</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>댓글이 없습니다.</p>
                    )}
                </GBox>
            </div>

            <div className='comment-list'>   
                <input
                    type="text"
                    placeholder="작성자"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="댓글"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
                <GButton color="danger" onClick={addComment}>
                    댓글 추가
                </GButton>
            </div>

            <div className='delete-button'>
                <GButton color="danger" onClick={handleDelete}>
                    글 삭제
                </GButton>
            </div>
        </GBox>
    );
};

export default BoardDetail;


