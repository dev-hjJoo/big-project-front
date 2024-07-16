import {React, useState} from 'react';
import "./chatbot.scss"
import { Divider } from '@mui/material';
import GComment from '../../Componentts/GComment/GComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPoo, faRobot, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughWink } from '@fortawesome/free-regular-svg-icons';


const ChatbotPresenter = ({sessionList, selectedSessionID, 
                           onClickCreateNewSession, onClickRemoveSession,
                           chatLog, 
                           userInput, loadUserInput, 
                           addContentToLocalChatLog}) => {


    return (
        <div className="chat">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Function Buttons */}
                <div className="functions">
                    <div className="plusBtn" onClick={onClickCreateNewSession}>
                        <FontAwesomeIcon icon={faPlus} size='lg' className='animatedIcon'/>
                    </div>
                </div>
                <Divider> Session </Divider>
                {/* Session List */}
                <div className="sessions">
                        {console.log('sessionList', sessionList)}
                        {sessionList.length == 0 ? <>
                            <span>No session</span>
                        </>:<>
                            {sessionList.map((nav, key) => (
                            <div key={nav.session_id} className='session'>
                                <div className="top">
                                    <div className="summary">
                                        {nav.summary == null ? `Chat ${nav.session_id}`: nav.summary}
                                    </div>
                                    <div className="btnArea" onClick={() => {onClickRemoveSession(nav.session_id)}}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </div>
                                </div>
                                <div className='bottom'>
                                    <div className="updateDate">{nav.updated_at}</div>
                                </div>
                            </div> ))}
                        </>
                        }
                    </div>
            </div>

            {/* Contents */}
            {selectedSessionID == -1 ? <div className='waiting'>
                <FontAwesomeIcon icon={faFaceLaughWink} size='2x' spin/>
                <span>Add or Select a session to begin.</span>
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