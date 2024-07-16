import {React, useState} from 'react';
import "./chatbot.scss"
import { Divider } from '@mui/material';
import GComment from '../../Componentts/GComment/GComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPoo, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughWink } from '@fortawesome/free-regular-svg-icons';


const ChatbotPresenter = ({chatLog, selectedSessionNo, userInput, loadUserInput, addContentToLocalChatLog}) => {


    return (
        <div className="chat">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="functions">
                    <FontAwesomeIcon icon={faPlus} size='lg'/>
                </div>
                <Divider> Session </Divider>

            </div>

            {/* Contents */}
            {selectedSessionNo == -1 ? <div className='waiting'>
                <FontAwesomeIcon icon={faFaceLaughWink} size='2x' spin/>
                <span>Add or select a session to begin.</span>
                <span className='logo'>Professional legal advice from Glawbal</span>
            </div> : <div className='chatContainer'>
                <div className="chatLog">
                    {chatLog.map((nav, key) => (
                        <div className={nav.speaker} key={nav.id}>
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
                <GComment content={userInput} 
                          loadContent={loadUserInput} 
                          addContentToLocalChatLog={addContentToLocalChatLog}/>
            </div>}

        </div>
    );
};

export default ChatbotPresenter;