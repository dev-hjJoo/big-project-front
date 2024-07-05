import React from 'react';
import "./home.scss"
import GBox from '../../Componentts/GBox/GBox';
import { Divider } from '@mui/material';

const HomePresenter = ({ bow, articles }) => {
    return (
        <div className="home layout">
            {/* LEFT */}
            <div className="left">
                {/* L-TOP */}
                <div className="layout top">
                    <GBox size='large' bgImageSrc='./glawbal.png'>
                        <div className="main">
                            <h1>Glawbal!</h1>
                            세계 어디서든 법률 걱정 없이 일하세요!<br></br>
                            외국인 근로자와 해외 근무자를 위한 맞춤 법률 정보 제공 서비스
                        </div>
                    </GBox>
                </div>
                {/* L-BOTTOM */}
                <div className="layout bottom">
                    <Divider />
                    <div className="label">Recommended</div>
                    <div className="articles">
                        {articles.map((nav, key) => (
                            <GBox size='small' color='transparency'>
                                <img src={nav.imgURL}/>
                                <div className="iHeader">
                                    <div className="header1"> {nav.source} </div>
                                    <div className="header2"> {nav.datetime} </div>
                                </div>
                                <div className="iBody">
                                    <div className="iTitle">{nav.headline}</div>
                                    <div className="iContents">{nav.summary}</div>
                                </div>
                            </GBox>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="right">
                <div className="label">Best of the week</div>
                <div className="bow">
                    {bow.map((nav, key) => (
                        <GBox size='large' className="item">
                        <div className="iHeader">
                            <div className="source"> {nav.type} </div>
                            <div className="datetime"> views: {nav.views} </div>
                        </div>
                        <div className="iBody">
                            <div className="iTitle">{nav.headline}</div>
                            <div className="iContents">{nav.summary}</div>
                        </div>
                    </GBox>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePresenter;