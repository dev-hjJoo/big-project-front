import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

const GBoard = ({ addComment }) => {
    const [content, setContent] = useState('');

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleAddComment = () => {
        addComment(content); // 부모 컴포넌트에서 전달받은 함수 호출
        setContent(''); // 입력 필드 초기화
    };

    return (
        <div className="comment">
            <TextareaAutosize
                placeholder="댓글을 입력하세요"
                onChange={handleContentChange}
                value={content}
            />
            <div className="clickBtn" onClick={handleAddComment}>
                <FontAwesomeIcon icon={faCircleArrowUp} size="lg" />
            </div>
        </div>
    );
};

export default GBoard;