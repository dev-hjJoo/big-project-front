import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GButton from "../../Componentts/GButton/GButton";
import { Divider } from "@mui/material";
import './board.scss'

const BoardWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

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
        };

        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        localStorage.setItem('posts', JSON.stringify([...savedPosts, newPost]));

        navigate('/community/list');
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <div className="highlight"></div>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Please enter a title"
                            required
                        />
                    </div>
                    <Divider />
                    <div className="content">
                        <textarea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="button-container">
                        <GButton color="outlinePrimary" hover='hover' type="submit">저장</GButton>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BoardWrite;
