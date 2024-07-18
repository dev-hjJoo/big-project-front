import React from 'react';
import "./comment.scss"

import TextareaAutosize from "react-textarea-autosize";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const GComment = ({content, onChangeContent, submitContent, readOnly}) => {
    return (
        <div className="comment">
            <TextareaAutosize placeholder='Message' onChange={onChangeContent} value={content} readOnly={readOnly}/> 
            <div className="clickBtn" onClick={submitContent}>
                <FontAwesomeIcon icon={faCircleArrowUp} size='lg'/>
            </div>
        </div>
    );
};

export default GComment;