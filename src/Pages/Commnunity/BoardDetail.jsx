import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GBox from '../../Componentts/GBox/GBox';
import GButton from '../../Componentts/GButton/GButton';
import './board.scss'
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const BoardDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const [post, setPost] = useState(
        savedPosts.find(post => post.id === parseInt(id)) || { comments: [] }
    );
    const [commentContent, setCommentContent] = useState('');

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
        const newComment = { author: '사용자 닉네임', content: commentContent };
        const updatedPost = { ...post, comments: [...(post.comments || []), newComment] };
        const updatedPosts = savedPosts.map(p => (p.id === updatedPost.id ? updatedPost : p));
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPost(updatedPost); // 상태 업데이트
        setCommentContent(''); // 댓글 입력 필드 초기화
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
        <>
            {/* POST */}
            <div className="board-detail">
                <div className="detail-header">
                    <div className="detail-title">{post.title}</div>
                    <div className="detail-author">{post.author}</div>
                    <div className="detail-views">👀: {post.views}</div>
                    {/* 수정사항: onClick -> 삭제하시겠습니까 Alert 떠야 함 */}
                    <div className="hiddenMenu"> <FontAwesomeIcon icon={faTrashCan} onClick={handleDelete}/> </div>
                </div>
                <Divider />
                <div className='board-content'>
                    <p>{post.content}</p>
                </div>
            </div>
            <Divider>Comment</Divider>

            {/* Comment */}
            <div className='comment-detail'>
                {post.comments && post.comments.length > 0 ? (
                        <ul>
                            {post.comments.map((comment, index) => (
                                <li key={index} className="comment-item">
                                    <span className="comment-author">{comment.author}</span>
                                    {/* 수정사항: 댓글 개수가 게시물 뒤에 [1] 이런 식으로 들어가면 좋을 것 같아요! */}
                                    <p className="comment-content">{comment.content}</p>
                                    <FontAwesomeIcon icon={faXmark} onClick={() => deleteComment(index)} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>댓글이 없습니다.</p>
                    )
                }
            </div>

            <div className='comment-list'>   
                <input
                    type="text"
                    placeholder="Enter your comments"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
                <GButton color="outlinePrimary" hover='hover' onClick={addComment}>
                    Send
                </GButton>
            </div>
        </>
    );
};

export default BoardDetail;


