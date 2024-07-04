import {React, useState} from 'react';
import "./chatbot.scss"
import { Divider } from '@mui/material';
import GComment from '../../Componentts/GComment/GComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo, faRobot } from '@fortawesome/free-solid-svg-icons';
import TextareaAutosize from "react-textarea-autosize";


const ChatbotPresenter = ({chatLog, content, loadContent, addContentToLocalChatLog}) => {


    return (
        <>
            <div className="chatLog">
                {chatLog.map((nav, key) => (
                    <div className={nav.speaker}>
                        <div className="avatar">
                            <FontAwesomeIcon icon={nav.speaker == 'BOT'? faRobot: faPoo} size='lg'/> {nav.speaker}
                        </div>
                        <div className="contents">
                            <span> {nav.content} </span>
                        </div>
                    </div>
                ))}
            </div>
            <Divider/>
            <GComment content={content} loadContent={loadContent} addContentToLocalChatLog={addContentToLocalChatLog}/>
        </>
    );
};

export default ChatbotPresenter;