import React, { useState, useRef } from 'react';
import OCRPresenter from './OCRPresenter';
import GButton from '../../Componentts/GButton/GButton';

const OCRContainer = () => {
    // 업로드된 이미지 URL을 저장하는 상태
    const [images, setImages] = useState([]);
    const [contractType, setContractType] = useState('standard');
    // 숨겨진 파일 입력 요소에 대한 참조
    const fileInputRef = useRef(null);

    // 이미지 업로드를 처리하는 이벤트 핸들러
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...imageUrls]);
    };

    // 버튼 클릭을 처리하는 이벤트 핸들러
    const handleButtonClick = () => {
        fileInputRef.current.click();   // 숨겨진 파일 입력 요소를 클릭
    };

    const handleSelectChange = (event) => {
        setContractType(event.target.value);
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }} // 파일 입력 요소 숨기기
                onChange={handleImageUpload}    // 파일이 선택되면 handleImageUpload 호출
                multiple
            />
            {/* OCRPresenter 컴포넌트에 이미지와 버튼 클릭 핸들러 전달 */}
            <OCRPresenter
                images={images}
                onButtonClick={handleButtonClick}
                contractType={contractType}
                onSelectChange={handleSelectChange}
            />
        </div>
    );
};

export default OCRContainer;
