import React from 'react';
import "./box.scss"

const GBox = ({children, size, color}) => {
    return (
        <div className={"box "+size+((color==undefined) ? ' basic': '')}>
            {children}
        </div>
    );
};

export default GBox;