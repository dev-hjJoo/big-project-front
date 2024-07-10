import React from 'react';
import './button.scss'

const GButton = ({children, color, onClick, hover}) => {
    return (
        <button className={`${color} ${hover}`} onClick={onClick}> {children} </button>
    );
};

export default GButton;