import React from 'react';
import { Link } from 'react-router-dom';
import './faq.scss'
import { Divider } from '@mui/material';
import GTableColumn from './GTableColumn';
import GButton from '../../Componentts/GButton/GButton';

const FAQPresenter = ({tab, tabList, changeTab, bow, selectedCol, showDetail}) => {
    return (
        <div className='faqContainer'>
            {/* TAB */}
            <div className="category">
                <ul className='tabs'>
                    {tabList.map((tabItem) => (
                        <li key={tabItem.id} 
                            className={`tab ${tab === tabItem.id ? 'selected' : ''}`} 
                            onClick={() => changeTab(tabItem.id)}>
                            {tabItem.label}
                        </li>
                    ))}
                </ul>
            </div>
            <Divider/>
            {/* Contents */}
            <div className="faqs">
                <div className="table">
                    {bow.map((bowItem, index) => (
                        <>
                        <GTableColumn onClick={() => showDetail(bowItem.index)}>
                            <div className="no">{index+1}</div>
                            <div className="headline">{bowItem.headline}</div>
                            <div className="views">{bowItem.views}</div>
                        </GTableColumn>
                        {(selectedCol == bowItem.index) ? 
                            (<div className="detail">
                                {bowItem.summary + bowItem.content}
                            </div>) : ''}

                        </>
                    ))}
                </div>
            </div>

            {/* button */}
            <div className="button">
                <Link to='/chat'>
                    <GButton color='outlinePrimary' hover='hover'>찾으시는 내용이 없나요? 챗봇에게 물어보세요!</GButton>
                </Link>
            </div>
        </div>
    );
};

export default FAQPresenter;