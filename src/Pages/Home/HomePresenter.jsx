import React from 'react';
import "./home.scss"
import GBox from '../../Componentts/GBox/GBox';

const HomePresenter = () => {
    return (
        <>
            <div className="layout top">
                <GBox size='large'>
                    여기에 내용이 들어갑니다.
                </GBox>
            </div>
            <div className="layout bottom">
                <GBox size='medium'>
                    여기에 내용이 들어갑니다.
                </GBox>
                <GBox size='medium'>
                    여기에 내용이 들어갑니다.
                </GBox>
            </div>
            
        </>
    );
};

export default HomePresenter;