import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GBox from '../../Componentts/GBox/GBox';
import GButton from '../../Componentts/GButton/GButton';
import qs from 'qs';
import './board.scss';
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const BoardDetail = ({userAccessToken}) => {
    const { id } = useParams(); // URL 파라미터에서 게시글 ID를 가져옴
    const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 객체
    const [post, setPost] = useState({ comments: [] }); // 게시글 상태
    const [commentContent, setCommentContent] = useState(''); // 댓글 내용 상태

    // 게시글을 백엔드 서버에서 가져오는 함수
    const fetchPost = () => {
        axios({
            method: 'GET',
            url: `http://34.64.89.168:8000/community/articles/${id}/`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userAccessToken}`
            },
        })
            .then(response => {
                setPost(response.data); // 상태에 게시글 저장
            })
            .catch(error => {
                console.error('게시글을 가져오는 중 오류 발생:', error); // 오류 처리
            });
    };

    // 컴포넌트가 마운트될 때 게시글을 로드
    useEffect(() => {
        fetchPost(); // 초기 로드
    }, [id]);

    // 게시글 삭제 함수
    const handleDelete = () => {
        axios({
            method: 'DELETE',
            url: `http://34.64.89.168:8000/community/articles/${id}/`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userAccessToken}`
            },
        })
            .then(() => {
                navigate('/community/list'); // 삭제 후 목록 페이지로 이동
            })
            .catch(error => {
                console.error('게시글을 삭제하는 중 오류 발생:', error); // 오류 처리
            });
    };

    // 댓글 추가 함수
    const addComment = () => {
        const newComment = { message: commentContent, article: 1}; // 새로운 댓글 객체
        axios({
            method: 'POST',
            url: `http://34.64.89.168:8000/community/articles/${id}/comments/`, // URL 수정
            data: JSON.stringify(newComment), // 데이터를 JSON으로 변환
            headers: {
                'Content-Type': 'application/json', // 헤더 설정
                Authorization: `Bearer ${userAccessToken}`
            },
        })
            .then(response => {
                const addedComment = {
                    user: response.data.user,
                    message: response.data.message, // 'mesage' 오타 수정
                    created_at: response.data.created_at,
                    updated_at: response.data.updated_at
                };
                setPost(prevPost => ({
                    ...prevPost,
                    comments: [...prevPost.comments, addedComment] // 상태에 새로운 댓글 추가
                }));
                setCommentContent(''); // 댓글 입력 필드 초기화
            })
            .catch(error => {
                console.error('댓글을 추가하는 중 오류 발생:', error); // 오류 처리
            });
    };
    // 댓글 삭제 함수
    const deleteComment = (commentId) => {
        axios({
            method: 'DELETE',
            url: `http://34.64.89.168:8000/community/comments/${commentId}/`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userAccessToken}`
            },
        })
            .then(() => {
                setPost(prevPost => ({
                    ...prevPost,
                    comments: prevPost.comments.filter(comment => comment.id !== commentId) // 상태에서 댓글 삭제
                }));
            })
            .catch(error => {
                console.error('댓글을 삭제하는 중 오류 발생:', error); // 오류 처리
            });
    };

    if (!post) {
        return <GBox size="large">게시글을 찾을 수 없습니다</GBox>; // 게시글이 로드되지 않았을 때 표시
    }

    return (
        <>
            {/* 게시글 상세 */}
            <div className="board-detail">
                <div className="detail-header">
                    <div className="detail-title">{post.title}</div>
                    <div className="detail-author">{post.user?.username ? post.user.username : '알 수 없음'}</div> {/* user가 정의되어 있는지 확인 */}
                    <div className="detail-views">👀: {post.view}</div>
                    {/* 삭제 버튼 클릭 시 확인 알림 */}
                    <div className="hiddenMenu">
                        <FontAwesomeIcon icon={faTrashCan} onClick={() => window.confirm('정말 삭제하시겠습니까?') && handleDelete()} />
                    </div>
                </div>
                <Divider />
                <div className='board-content'>
                    <p>{post.content}</p>
                </div>
            </div>
            <Divider>댓글</Divider>

            {/* 댓글 목록 */}
            <div className='comment-detail'>
                {post.comments && post.comments.length > 0 ? (
                    <ul>
                        {post.comments.map((comment, index) => (
                            <li key={comment.id} className="comment-item">
                                <span className="comment-author">{comment.user?.username ? comment.user.username : '알 수 없음'}</span> {/* user가 정의되어 있는지 확인 */}
                                <p className="comment-content">{comment.message}</p>
                                <FontAwesomeIcon icon={faXmark} onClick={() => deleteComment(comment.id)} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>댓글이 없습니다.</p>
                )}
            </div>

            {/* 댓글 작성 */}
            <div className='comment-list'>
                <input
                    type="text"
                    placeholder="댓글을 입력하세요"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
                <GButton color="outlinePrimary" hover='hover' onClick={addComment}>
                    작성
                </GButton>
            </div>
        </>
    );
};

export default BoardDetail;