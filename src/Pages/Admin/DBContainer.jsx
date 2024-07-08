import React, { useState, useEffect } from 'react';
import DBPresenter from './DBPresenter';

const DBContainer = () => {
  const [selectedMenu, setSelectedMenu] = useState('db');
  const [apiSettings, setApiSettings] = useState({
    law: false,
    terminology: false,
  });
  const [fileList, setFileList] = useState([]);
  const [nextId, setNextId] = useState(1); // 다음에 추가될 파일의 id
  const [alertMessage, setAlertMessage] = useState('');

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

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage('');
    }
  }, [alertMessage]);

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
  );
};

export default DBContainer;
