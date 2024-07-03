import React from 'react';
import "./box.scss"

const GBox = ({children, size}) => {
    return (
        <div className={"box "+size}>
            {children}
        </div>
    );
};

export default GBox;