import React, { useState, useRef } from 'react';
import OCRPresenter from './OCRPresenter';
import GButton from '../../Componentts/GButton/GButton';
import axios from 'axios';
import { getCookie } from '../../Assets/CookieContainer';

const OCRContainer = () => {
    const [images, setImages] = useState([]);
    const [contractType, setContractType] = useState('standard');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null); 
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImages(imageUrls);
        setResult(null);
        setError(null); 
        uploadImages(files);
    };

    const uploadImages = async (files) => {
        const formData = new FormData();
        formData.append('contract', contractType);
        files.forEach(file => formData.append('image_files', file));

        try {
            const response = await axios.post('http://34.64.89.168:8000/ocr/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${getCookie('accessToken')}`
                }
            });
            setResult(response.data);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
                console.error('Error uploading images:', error.response.data);
            } else {
                setError('An unexpected error occurred.');
                console.error('Error uploading images:', error.message);
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSelectChange = (event) => {
        setContractType(event.target.value);
        setImages([]);
        setResult(null);
        setError(null); 
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
                multiple
            />
            <OCRPresenter
                images={images}
                onButtonClick={handleButtonClick}
                contractType={contractType}
                onSelectChange={handleSelectChange}
                result={result}
                error={error} 
            />
        </div>
    );
};

export default OCRContainer;