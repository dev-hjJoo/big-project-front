import React, { useState, useRef } from 'react';
import OCRPresenter from './OCRPresenter';
import GButton from '../../Componentts/GButton/GButton';

const OCRContainer = () => {
    // 업로드된 이미지 URL을 저장하는 상태
    const [image, setImage] = useState(null);
    // 숨겨진 파일 입력 요소에 대한 참조
    const fileInputRef = useRef(null);

    // 이미지 업로드를 처리하는 이벤트 핸들러
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // 업로드된 파일 가져오기
        if (file) {
            const imageUrl = URL.createObjectURL(file); // 파일의 URL 생성
            setImage(imageUrl);
        }
    };

    // 버튼 클릭을 처리하는 이벤트 핸들러
    const handleButtonClick = () => {
        fileInputRef.current.click();   // 숨겨진 파일 입력 요소를 클릭
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }} // 파일 입력 요소 숨기기
                onChange={handleImageUpload}    // 파일이 선택되면 handleImageUpload 호출
            />
            {/* OCRPresenter 컴포넌트에 이미지와 버튼 클릭 핸들러 전달 */}
            <OCRPresenter image={image} onButtonClick={handleButtonClick} />
        </div>
    );
};

export default OCRContainer;
