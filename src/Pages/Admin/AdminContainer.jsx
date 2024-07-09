import React, { useState, useEffect } from 'react';
import DBPresenter from './DBPresenter';

const AdminContainer = () => {
    // States
    const [selectedMenu, setSelectedMenu] = useState('db');
    const [apiSettings, setApiSettings] = useState(() => {
        const savedSettings = localStorage.getItem('apiSettings');
        return savedSettings ? JSON.parse(savedSettings) : { law: false, terminology: false };
    });
    const [fileList, setFileList] = useState(() => {
        const savedFiles = localStorage.getItem('fileList');
        return savedFiles ? JSON.parse(savedFiles) : [];
    });
    const [nextId, setNextId] = useState(() => {
        const savedNextId = localStorage.getItem('nextId');
        return savedNextId ? parseInt(savedNextId, 10) : 1;
    });
    const [alertMessage, setAlertMessage] = useState('');

    // Effects
    useEffect(() => {
        // 상태가 변경될 때마다 저장
        localStorage.setItem('apiSettings', JSON.stringify(apiSettings));
    }, [apiSettings]);

    useEffect(() => {
        localStorage.setItem('fileList', JSON.stringify(fileList));
    }, [fileList]);

    useEffect(() => {
        localStorage.setItem('nextId', nextId.toString());
    }, [nextId]);

    useEffect(() => {
        if (alertMessage) {
            alert(alertMessage);
            setAlertMessage('');
        }
    }, [alertMessage]);

    // Functions
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleToggleChange = (name) => {
        setApiSettings((prevSettings) => {
            const newValue = !prevSettings[name];
            setAlertMessage(
                newValue
                    ? '업데이트 주기 설정이 완료됐습니다.'
                    : '업데이트 설정을 취소했습니다.'
            );
            return {
                ...prevSettings,
                [name]: newValue,
            };
        });
    };

    const handleAddFile = () => {
        const currentDateTime = new Date().toLocaleString(); // 현재 시간과 날짜를 포맷팅
        const newFile = { id: nextId, name: '파일 이름', uploadDate: currentDateTime, checked: false };
        setFileList([...fileList, newFile]);
        setNextId(nextId + 1); // 다음 id를 증가시킴
    };

    const handleSelectAll = () => {
        const allSelected = fileList.every(file => file.checked);
        const updatedFiles = fileList.map(file => ({ ...file, checked: !allSelected }));
        setFileList(updatedFiles);
    };

    const handleFileCheck = (id) => {
        const updatedFiles = fileList.map(file =>
            file.id === id ? { ...file, checked: !file.checked } : file
        );
        setFileList(updatedFiles);
    };

    const handleDeleteFiles = () => {
        const updatedFiles = fileList.filter(file => !file.checked);
        setFileList(updatedFiles);
    };

    return (
        <>
            <DBPresenter 
                selectedMenu={selectedMenu}
                apiSettings={apiSettings}
                fileList={fileList}
                handleMenuClick={handleMenuClick}
                handleToggleChange={handleToggleChange}
                handleAddFile={handleAddFile}
                handleSelectAll={handleSelectAll}
                handleFileCheck={handleFileCheck}
                handleDeleteFiles={handleDeleteFiles}
            />
        </>
    );
};

export default AdminContainer;
