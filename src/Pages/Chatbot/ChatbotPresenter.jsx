import {React, useState} from 'react';
import "./chatbot.scss"
import { Divider } from '@mui/material';
import GComment from '../../Componentts/GComment/GComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildReaching, faPlus, faPoo, faRobot, faTrashCan, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughWink } from '@fortawesome/free-regular-svg-icons';


const ChatbotPresenter = ({sessionList, selectedSessionID, 
                           onClickCreateNewSession, 
                           onClickRemoveSession, 
                           onClickConnectSession, 
                           onClickSubmitChat,
                           chatLog, 
                           userInput, loadUserInput, }) => {

    const senderIndexToString = (senderIndex) => {
        return (senderIndex == 0) ? 'BOT' : 'USER';
    }


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
                        {sessionList.length == 0 ? <>
                            <span>No session</span>
                        </>:<>
                            {sessionList.map((nav, key) => (
                            <div key={nav.session_id} className='session'>
                                <div className="top">
                                    <div className="summary" onClick={()=> {onClickConnectSession(nav.session_id)}}>
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
                        <div className={senderIndexToString(nav.sender)} key={nav.id}>
                            <div className="avatar">
                                <FontAwesomeIcon icon={nav.sender == 0? faRobot: faChildReaching} size='lg'/> {senderIndexToString(nav.sender)}
                            </div>
                            <div className="contents">
                                <span> {nav.message} </span>
                            </div>
                        </div>
                    ))}
                </div>
                <Divider/>
                <GComment content={userInput} 
                          onChangeContent={loadUserInput} 
                          submitContent={onClickSubmitChat}/>
            </div>}

        </div>
    );
};

export default ChatbotPresenter;