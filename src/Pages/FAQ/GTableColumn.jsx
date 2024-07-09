import React from 'react';
import './table.scss'

const GTableColumn = ({children, onClick}) => {
    return (
        <div className='col' onClick={onClick}>
            {children}
        </div>
    );
};

export default GTableColumn;