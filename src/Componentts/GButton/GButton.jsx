import React from 'react';
import './button.scss'

const GButton = ({ children, color, onClick }) => {
    return (
        <button className={color} onClick={onClick}>
            {children}
        </button>
    );
};

export default GButton;