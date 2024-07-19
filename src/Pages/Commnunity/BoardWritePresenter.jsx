import React from 'react';
import './board.scss';
import { Divider } from "@mui/material";
import GButton from "../../Componentts/GButton/GButton";

const BoardWritePresenter = ({ title, setTitle, content, setContent, handleSubmit }) => {
    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="제목"
                            required
                        />
                    </div>
                    <Divider />
                    <div className="content">
                        <textarea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder='내용'
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

export default BoardWritePresenter;