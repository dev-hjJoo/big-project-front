import React, { useState } from 'react';
import axios from 'axios';
import OCRPresenter from './OCRPresenter';
import { getCookie } from '../../Assets/CookieContainer';

const OCRContainer = () => {
    const [contractType, setContractType] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const [result, setResult] = useState(null);
    const [missingItems, setMissingItems] = useState([]);
    const [error, setError] = useState('');

    const handleContractTypeChange = (e) => {
        setContractType(e.target.value);
        setResult(null);
        setMissingItems([]);
        setError('');
    };    

    const handleFileChange = (e) => {
        setImageFiles([...e.target.files]);
        setResult(null);
        setMissingItems([]);
        setError('');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (imageFiles.length === 0) {
            setError('Please upload images.');
            return;
        }

        const formData = new FormData();
        formData.append('contract', contractType);
        imageFiles.forEach((file) => {
            formData.append('image_files', file);
        });

        axios({
            method: 'POST',
            url: 'http://34.64.89.168:8000/ocr/upload/',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${getCookie('accessToken')}`
            }
        }).then((response) => {
            const result = response.data;
            console.log('ocr result:', result)
            setResult(result.result);
            setMissingItems(result.missing_items);
            setError('');
        }).catch((error) => {
            console.error(error); 
            if (error.response) {
                setError(error.response.data.error || 'An error occurred.');
            } else if (error.request) {
                setError('No response received from the server.');
            } else {
                setError('Error in setting up the request.');
            }
        });
    };

    return (
        <OCRPresenter
            contractType={contractType}
            imageFiles={imageFiles}
            result={result}
            missingItems={missingItems}
            error={error}
            handleContractTypeChange={handleContractTypeChange}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default OCRContainer;
