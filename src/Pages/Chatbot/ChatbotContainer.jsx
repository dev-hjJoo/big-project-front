import React, { useState } from 'react';
import ChatbotPresenter from './ChatbotPresenter';



const Chatbot = () => {
    // States
    const [content, setContent] = useState('')
    const [chatLog, setChatLog] = useState([{
        speaker: "BOT",
        content: "안녕하세요. 전세계 어디에서나 일하고 싶은 당신을 위한, 글로-발 워커입니다.\n질문할 내용이 있으신가요?",
        datetime: "2024/07/02 16:36"
    },])

    // Functions
    const loadContent = e => {
        setContent(e.target.value)
    }

    const addContentToLocalChatLog = () => {
        setChatLog([ ...chatLog,
            {
                speaker: "USER",
                content: content,
                datetime: Date.now().toLocaleString()
            }
        ])
        setContent('')
        console.log(content)
    }

    return (
        <>
            <ChatbotPresenter chatLog={chatLog} 
                              content={content} 
                              loadContent={loadContent} 
                              addContentToLocalChatLog={addContentToLocalChatLog} />
        </>
    );
};

export default Chatbot;