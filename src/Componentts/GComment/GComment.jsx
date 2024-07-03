import React from 'react';
import "./comment.scss"

import TextareaAutosize from "react-textarea-autosize";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const GComment = ({loadContent, addContentToLocalChatLog}) => {
    return (
        <div className="comment">
            <TextareaAutosize placeholder='Message' onChange={loadContent} /> 
            <div className="clickBtn" onClick={addContentToLocalChatLog}>
                <FontAwesomeIcon icon={faCircleArrowUp} size='lg'/>
            </div>
        </div>
    );
};

export default GComment;