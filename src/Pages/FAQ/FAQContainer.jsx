import React, { useEffect, useState } from 'react';
import FAQPresenter from './FAQPresenter';
import axios from 'axios';
import { totalList, lawList, glossaryList, ruleList } from './faqDB';


const FAQContainer = ({userAccessToken}) => {

    // useEffect(() => {
    //     getFAQLaw20API()
    //     getFAQGlossary20API()
    //     getFAQRule20API()
    // }, [])

    // state
    const [tab, setTab] = useState(0);
    const [selectedCol, setSelectedCol] = useState('')
    const [bow,setBow] = useState(null)

    // const [lawList, setLawList] = useState(null)
    // const [glossaryList, setGlossaryList] = useState(null)
    // const [ruleList, setRuleList] = useState(null)
    // const tabContents = [bow, lawList, glossaryList, ruleList]
  
    const tabList = ['전체', '현행법령', '법률용어', '환경/복지']
    const tabContents = [totalList, lawList, glossaryList, ruleList]



    // function
    const changeTab = (to) => {
        if(to<0 || to>3) setTab(0)
        else setTab(to)
    }

    const showDetail = (bowID) => {
        if (selectedCol == '') setSelectedCol(bowID)
        else setSelectedCol('')
    }

    // const getFAQLaw20API = () => {
    //     axios({
    //         method: 'GET',
    //         url: `http://34.64.89.168:8000/fqa/law/?page=1`,
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded',
    //             Authorization: `Bearer ${userAccessToken}`
    //         },
    //     }).then((response) => {
    //         const result = response.data
    //         setLawList(result['results'])
    //     })
    // }

    // const getFAQGlossary20API = () => {
    //     axios({
    //         method: 'GET',
    //         url: `http://34.64.89.168:8000/fqa/glossary/?page=1`,
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded',
    //             Authorization: `Bearer ${userAccessToken}`
    //         },
    //     }).then((response) => {
    //         const result = response.data
    //         setGlossaryList(result['results'])
    //     })
    // }

    // const getFAQRule20API = () => {
    //     axios({
    //         method: 'GET',
    //         url: `http://34.64.89.168:8000/fqa/rule/?page=1`,
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded',
    //             Authorization: `Bearer ${userAccessToken}`
    //         },
    //     }).then((response) => {
    //         const result = response.data
    //         setRuleList(result['results'])
    //     })
    // }


    // result
    return (
        <FAQPresenter tab={tab}
                      tabList={tabList}
                      changeTab={changeTab}
                      bow={tabContents[tab]}
                      selectedCol={selectedCol}
                      showDetail={showDetail} />
    );
};

export default FAQContainer;