import React, { useState } from 'react';
import './DB.scss';

const DBPresenter = () => {
  const [selectedMenu, setSelectedMenu] = useState('db'); // 초기값을 'db'로 설정
  const [apiSettings, setApiSettings] = useState({
    law: false,
    terminology: false
  });

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleToggleChange = (name) => {
    setApiSettings((prevSettings) => ({
      ...prevSettings,
      [name]: !prevSettings[name]
    }));
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <div className="menu">
          <div>
            기능관리
          </div>
          <span 
            className={selectedMenu === 'db' ? 'active' : ''} 
            onClick={() => handleMenuClick('db')}
          >
            - DB관리
          </span> 
          {'  '}
          <div>
            콘텐츠 관리
          </div>
          <span 
            className={selectedMenu === 'dashboard' ? 'active' : ''} 
            onClick={() => handleMenuClick('dashboard')}
          >
            - 고객 대시보드
          </span>
        </div>
      </div>
      {selectedMenu === 'db' ? (
        <div className="content">
          <div className="gbox large">
            <h1>DB 관리</h1>
            <div className="api-section">
              <h2>API</h2>
              <div className="api-item">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={apiSettings.law}
                    onChange={() => handleToggleChange('law')}
                  />
                  <span className="slider"></span>
                </label>
                법률
                <label className="api-label">API 업데이트 주기</label>
                <select>
                  <option>매일</option>
                  <option>매주</option>
                  <option>매월</option>
                </select>
              </div>
              <div className="api-item">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={apiSettings.terminology}
                    onChange={() => handleToggleChange('terminology')}
                  />
                  <span className="slider"></span>
                </label>
                법률 용어
                <label className="api-label">API 업데이트 주기</label>
                <select>
                  <option>매일</option>
                  <option>매주</option>
                  <option>매월</option>
                </select>
              </div>
            </div>
          </div>
          <div className="gbox large">
            <div className="file-section">
              <h2>All Files</h2>
              <div className="file-actions">
                <div className="left-actions">
                  <button>전체 선택</button>
                </div>
                <div className="right-actions">
                  <button>추가</button>
                  <button>삭제</button>
                </div>
              </div>
              <ul className="file-list">
                <li>
                  <input type="checkbox" />
                  파일 이름1 <span>업로드 일자</span>
                </li>
                <li>
                  <input type="checkbox" />
                  파일 이름2 <span>업로드 일자</span>
                </li>
                <li>
                  <input type="checkbox" />
                  파일 이름3 <span>업로드 일자</span>
                </li>
                <li>
                  <input type="checkbox" />
                  파일 이름4 <span>업로드 일자</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : selectedMenu === 'dashboard' ? (
        <div className="content">
          <div className="gbox large">
            <h1>고객 대시보드</h1>
            <p>여기에 고객 대시보드 내용이 들어갑니다.</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DBPresenter;
