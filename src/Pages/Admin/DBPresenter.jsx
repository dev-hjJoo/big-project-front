import { React } from 'react';
import './DB.scss';

const DBPresenter = ({
    selectedMenu,
    apiSettings,
    fileList,
    handleMenuClick,
    handleToggleChange,
    handleAddFile,
    handleSelectAll,
    handleFileCheck,
    handleDeleteFiles,
}) => {
    return (
        <div className="layout">
            <div className="sidebar">
                <div className="menu">
                    <div>기능관리</div>
                    <span
                        className={selectedMenu === 'db' ? 'active' : ''}
                        onClick={() => handleMenuClick('db')}
                    >
                        - DB관리
                    </span>
                    <div>콘텐츠 관리</div>
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
                                    <button onClick={handleSelectAll}>전체 선택</button>
                                </div>
                                <div className="right-actions">
                                    <button onClick={handleAddFile}>추가</button>
                                    <button onClick={handleDeleteFiles}>삭제</button>
                                </div>
                            </div>
                            <ul className="file-list">
                                {fileList.map((file) => (
                                    <li key={file.id}>
                                        <input
                                            type="checkbox"
                                            checked={file.checked}
                                            onChange={() => handleFileCheck(file.id)}
                                        />
                                        {file.name} <span>{file.uploadDate}</span>
                                    </li>
                                ))}
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
