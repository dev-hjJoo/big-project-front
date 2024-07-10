import React from 'react';
import './button.scss'

const GButton = ({children, color, hover}) => {
    return (
        <button className={`${color} ${hover}`}> {children} </button>
    );
};

export default GButton;