import React from 'react';
import "./home.scss"
import GBox from '../../Componentts/GBox/GBox';
import { Divider } from '@mui/material';
// import { Link } from 'react-router-dom';

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
                        {articles.map((nav, key) => {
                            // URL에서 마지막 부분을 추출하여 ID로 사용
                            // const urlParts = nav.url.split('/');
                            // const id = urlParts[urlParts.length - 1];

                            return (
                                <GBox size='small' color='transparency' key={key}>
                                    <a href={nav.url} target='_blank'>
                                        <img
                                            src={nav.imgURL}
                                            alt={nav.headline}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                width: '100%',
                                                maxHeight: '90px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                        <div className="iHeader">
                                            <div className="header1"> {nav.source} </div>
                                            <div className="header2"> {nav.datetime} </div>
                                        </div>
                                        <div className="iBody">
                                            <div className="iTitle">{nav.headline}</div>
                                            {/* <div className="iContents">{nav.summary}</div> */}
                                        </div>
                                    </a>
                                </GBox>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="right">
                <div className="label">Best of the week</div>
                <div className="bow">
                    {bow.map((nav, key) => (
                        <GBox size='large' className="item" key={key}>
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
