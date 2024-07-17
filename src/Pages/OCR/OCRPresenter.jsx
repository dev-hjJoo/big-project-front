import React, { Suspense, lazy } from 'react';
import GBox from '../../Componentts/GBox/GBox';
import GButton from '../../Componentts/GButton/GButton';
import "./ocr.scss";
import { Divider } from '@mui/material';

const OCRPresenter = ({ images = [], onButtonClick, contractType, onSelectChange, result, error }) => {
    const ResultBox = lazy(() =>
        contractType === 'standard'
            ? import('./StandardResultBox')
            : import('./ForeignResultBox')
    );

    const uploadMessage = contractType === 'standard' 
        ? "Please upload the image of the labor contract."
        : "Please upload the images of the two labor contracts.";

    return (
        <div>
            <div className="ocr-content">
                <h1>AI 근로계약서 검토</h1>
                <p style={{ textAlign: 'center' }}>
                    근로계약서 이미지를 업로드 해 보세요.<br />
                    AI가 분석해서 근로계약서를 검토 해 드립니다.
                </p>

                <div className="buttonArea" style={{ display: 'flex', alignItems: 'center' }}>
                    <select value={contractType} onChange={onSelectChange} style={{ marginRight: '10px' }}>
                        <option value="standard">표준근로계약서 업로드</option>
                        <option value="foreign">외국인 표준근로계약서 업로드</option>
                    </select>
                    <GButton color="primary" hover="hover" onClick={onButtonClick}>
                        Upload Image
                    </GButton>
                </div>

                <div className="ocr-container">
                    <div className="left-section" style={{ textAlign: 'center' }}>
                        <GBox className="ocr-uploader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {images.length > 0 ? (
                                images.map((image, index) => (
                                    <img key={index} src={image} alt={`Uploaded ${index}`} className="uploaded-image" style={{ maxWidth: '100%', height: 'auto', margin: '10px' }} />
                                ))
                            ) : (
                                <p>{uploadMessage}</p>
                            )}
                        </GBox>
                    </div>
                    <div className="right-section">
                        {error && (
                            <div style={{ color: 'red', textAlign: 'center' }}>
                                {error}
                            </div>
                        )}
                        {images.length > 0 && result && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ResultBox result={result} />
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OCRPresenter;