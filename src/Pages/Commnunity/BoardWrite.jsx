// BoardWrite.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GBox from "../../Componentts/GBox/GBox";
import GButton from "../../Componentts/GButton/GButton";
import "./BoardWrite.scss";

const BoardWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            content,
            author: "Anonymous",
            created_at: new Date().toLocaleString(undefined, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }), // Current date and time
            views: 0,
            author
        };

        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        localStorage.setItem('posts', JSON.stringify([...savedPosts, newPost]));

        navigate('/community/list');
    };

    return (
        <GBox size="medium">
            <h1>글 작성</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>작성자 : </label>
                        <input 
                            type="text" 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)} 
                            required // 필수 입력 표시
                        />
                    </div>
                    <div>
                        <label>제목 : </label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required
                        />
                    </div>
                    <div>
                        <label>내용 : </label>
                        <textarea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="button-container">
                        <GButton color="primary" type="submit">저장</GButton>
                    </div>
                </form>
            </div>
        </GBox>
    );
};

export default BoardWrite;
