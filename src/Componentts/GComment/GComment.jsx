import React from 'react';
import "./comment.scss"

import TextareaAutosize from "react-textarea-autosize";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const GComment = ({content, loadContent, addContentToLocalChatLog}) => {
    return (
        <div className="comment">
            <TextareaAutosize placeholder='Message' onChange={loadContent} value={content} /> 
            <div className="clickBtn" onClick={addContentToLocalChatLog}>
                <FontAwesomeIcon icon={faCircleArrowUp} size='lg'/>
            </div>
        </div>
    );
};

export default GComment;