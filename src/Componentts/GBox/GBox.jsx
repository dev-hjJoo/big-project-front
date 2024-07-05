import React from 'react';
import "./box.scss"

const GBox = ({children, size, color, bgImageSrc}) => {
    return (
        <div className={"box "
                        +size
                        +((color==undefined) ? ' basic': '')
                        +((bgImageSrc!=undefined) ? ' bg': '')}>
            {children}
        </div>
    );
};

export default GBox;