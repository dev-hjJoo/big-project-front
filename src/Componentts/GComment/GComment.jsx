import React from 'react';
import "./comment.scss"

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const GComment = () => {
    return (
        <div className="comment">
            <TextareaAutosize placeholder='Message'/>
            <FontAwesomeIcon icon={faCircleArrowUp} size='lg'/>
        </div>
    );
};

export default GComment;