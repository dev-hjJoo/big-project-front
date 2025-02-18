import {React, useRef, useEffect} from 'react';
import "./chatbot.scss"
import { Divider } from '@mui/material';
import GComment from '../../Componentts/GComment/GComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faChildReaching, faGavel, faHandshake, faHandshakeAlt, faPlus, faPoo, faRobot, faSpinner, faTrashCan, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughWink } from '@fortawesome/free-regular-svg-icons';


const ChatbotPresenter = ({sessionList, selectedSessionID, 
                           onClickCreateNewSession, 
                           onClickRemoveSession, 
                           onClickConnectSession, 
                           onClickSubmitChat,
                           onClickSearchCase,
                           chatLog, uiTexts,
                           userInput, loadUserInput, writingMode}) => {

    // 채팅 시 보여지는 이름 처리
    const senderIndexToString = (senderIndex) => {
        return (senderIndex == 0) ? 'BOT' : 'USER';
    }

    const changeDatetimeFormat = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        hour = hour >= 10 ? hour : '0' + hour;
        minute = minute >= 10 ? minute : '0' + minute;
        second = second >= 10 ? second : '0' + second;

        return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
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
                                    <div className="updateDate">{changeDatetimeFormat(new Date(nav.updated_at))}</div>
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
                                {(nav.sender==0) && (
                                    <div className="moreInfo">
                                        {nav.sender === 0 && nav.message !== "안녕하세요. 전세계 어디에서나 일하고 싶은 당신을 위한, 글로-발 워커입니다.\n질문할 내용이 있으신가요?" && ( // 첫 인사말 메시지를 제외
                                            <span onClick={() => onClickSearchCase(nav.id)}> 
                                                <FontAwesomeIcon icon={faAngleDoubleRight}/> {uiTexts.search_cases || "관련 판례 확인하기" }
                                            </span>
                                        )}
                                    </div>
                                )}
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