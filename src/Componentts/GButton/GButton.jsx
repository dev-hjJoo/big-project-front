import React from 'react';
import './button.scss'

const GButton = ({children, color, onClick, hover, type}) => {
    // color: 'primary, 'outlinePrimary'
    // hover: 'hover'
    return (
        <button className={`${color} ${hover}`} type={type} onClick={onClick}> {children} </button>
    );
};

export default GButton;