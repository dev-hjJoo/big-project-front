import {React, useRef, useEffect} from 'react';
import "./chatbot.scss"
import { Divider } from '@mui/material';
import GComment from '../../Componentts/GComment/GComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildReaching, faGavel, faHandshake, faHandshakeAlt, faPlus, faPoo, faRobot, faSpinner, faTrashCan, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughWink } from '@fortawesome/free-regular-svg-icons';


const ChatbotPresenter = ({sessionList, selectedSessionID, 
                           onClickCreateNewSession, 
                           onClickRemoveSession, 
                           onClickConnectSession, 
                           onClickSubmitChat,
                           chatLog, 
                           userInput, loadUserInput, writingMode}) => {

    // 채팅 시 보여지는 이름 처리
    const senderIndexToString = (senderIndex) => {
        return (senderIndex == 0) ? 'BOT' : 'USER';
    }

    // Scroll 처리
    const messageEndRef = useRef(null);
    useEffect(() => {
        if (!messageEndRef.current) return
        messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }, [chatLog]);


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
                    <div ref={messageEndRef}></div>
                </div>
                <Divider/>
                <div className="inputArea">
                    { writingMode ? 
                        <></>:
                        <div className="chatSpinner"><FontAwesomeIcon icon={faGavel} size='2x' spin/></div> 
                    }
                    
                    <GComment content={userInput} 
                          onChangeContent={loadUserInput}
                          readOnly={writingMode ? false:true} 
                          submitContent={onClickSubmitChat}/>
                </div>
            </div>}

        </div>
    );
};

export default ChatbotPresenter;