import React from 'react';
import './button.scss'

const GButton = ({children, color}) => {
    return (
        <button className={color}> {children} </button>
    );
};

export default GButton;