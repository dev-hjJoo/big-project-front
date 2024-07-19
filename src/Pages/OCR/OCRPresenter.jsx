import React, { useEffect, useState, lazy, Suspense } from 'react';
import GButton from '../../Componentts/GButton/GButton';
import "./ocr.scss";

const mergeImagesHorizontally = (imageFiles, callback) => {
    const image1 = new Image();
    const image2 = new Image();

    image1.src = URL.createObjectURL(imageFiles[0]);
    image2.src = URL.createObjectURL(imageFiles[1]);

    image1.onload = () => {
        image2.onload = () => {
            const maxHeight = Math.max(image1.height, image2.height);
            const totalWidth = image1.width + image2.width;

            const canvas = document.createElement('canvas');
            canvas.width = totalWidth;
            canvas.height = maxHeight;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(image1, 0, 0);
            ctx.drawImage(image2, image1.width, 0);

            const mergedImage = canvas.toDataURL('image/png');
            callback(mergedImage);
        };
    };
};

const drawBoundingBoxes = (image, res, setOutputImage) => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        res.images[0].fields.forEach(field => {
            const boundingBox = field.boundingPoly.vertices;
            ctx.beginPath();
            ctx.moveTo(boundingBox[0].x, boundingBox[0].y);
            for (let i = 1; i < boundingBox.length; i++) {
                ctx.lineTo(boundingBox[i].x, boundingBox[i].y);
            }
            ctx.closePath();

            if (field.inferText) {
                ctx.strokeStyle = 'green';
                ctx.lineWidth = 2;
            } else {
                ctx.strokeStyle = 'red';
                ctx.lineWidth = 4;
            }
            ctx.stroke();
        });

        const outputImage = canvas.toDataURL('image/png');
        setOutputImage(outputImage);
    };
};


const OCRPresenter = ({
    contractType,
    imageFiles,
    result,
    missingItems,
    error,
    handleContractTypeChange,
    handleFileChange,
    handleSubmit
}) => {
    const [outputImage, setOutputImage] = useState(null);

    const ResultBox = lazy(() =>
        contractType === 'standard_contract'
            ? import('./StandardResultBox')
            : import('./ForeignResultBox')
    );

    useEffect(() => {
        if (imageFiles.length > 0 && result) {
            if (contractType === 'foreigner_contract' && imageFiles.length === 2) {
                mergeImagesHorizontally(imageFiles, (mergedImage) => {
                    drawBoundingBoxes(mergedImage, result, setOutputImage);
                });
            } else {
                const reader = new FileReader();
                reader.onload = (e) => {
                    drawBoundingBoxes(e.target.result, result, setOutputImage);
                };
                reader.readAsDataURL(imageFiles[0]);
            }
        }
    }, [imageFiles, result, contractType]);

    return (
        <div>
            <div className="ocr-content">
                <h1>Contract AI-Check</h1>
                <p style={{ textAlign: 'center' }}>
                    근로계약서 이미지를 업로드 해 보세요.<br />
                    AI가 분석해서 근로계약서를 검토 해 드립니다.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="contract-type-upload">
                        <label>
                            <select value={contractType} onChange={handleContractTypeChange}>
                                <option value=""> Select Contract Type </option>
                                <option value="standard_contract">Standard Contract</option>
                                <option value="foreigner_contract">Foreigner Contract</option>
                            </select>
                        </label>
                        <GButton type="button" color="primary" hover="hover">
                            <label>
                                Upload Images
                                <input type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
                            </label>
                        </GButton>
                    </div>
                    <div className="form-actions">
                        <GButton type="submit" color="primary" hover="hover">Submit</GButton>
                    </div>
                </form> 
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="ocr-container">
                    {result && (
                        <>
                            <div className="left-section" style={{ textAlign: 'center' }}>
                                {outputImage ? (
                                    <img src={outputImage} alt="OCR Result" style={{ maxWidth: '100%', height: 'auto', margin: '10px' }} />
                                ) : (
                                    <pre>{JSON.stringify(result, null, 2)}</pre>
                                )}
                            </div>
                            <div className="right-section">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ResultBox missingItems={missingItems} />
                                </Suspense>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OCRPresenter;
