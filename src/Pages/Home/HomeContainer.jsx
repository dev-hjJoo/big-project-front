import React, { useState } from 'react';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {


    const [bow, setBow] = useState([
        {
            index: 1023,
            views: 1098,
            type: '환경/복지',
            headline: '진정·고소 제기 이후에도 체불임금을 지급받지 못한 경우 권리구제 절차',
            summary: '근로자의 임금을 체불한 사업주가 근로기준법 위반으로 형사상 처벌을 받는다고 하더라도 민사소송 등을 통해 체불임금을 지급받을 수 있습니다.'
        }, {
            index: 2488,
            views: 792,
            type: '법률용어',
            headline: '2차전지 또는 배터리',
            summary: '화학반응에 따라 전기에너지를 저장하고 내보낼 수 있는 재충전이 가능한 전기화학시스템을 갖는 전지 또는 배터리를 말한다.'
        }, {
            index: 873,
            views: 543,
            type: '현행법령',
            headline: '고용산재보험신고법',
            summary: '제1조(목적) 이 법은 「고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률」에 따른 보험관계 성립신고와 「고용보험법」에 따른 피보험자격 취득신고의 비율이 낮은...'
        }, {
            index: 2176,
            views: 277,
            type: '법률용어',
            headline: '4대보험',
            summary: ' 「국민연금법」에 따른 국민연금, 「국민건강보험법」에 따른 국민건강보험(「노인장기요양보험법」에 따른 장기요양보험을 포함한다), 「고용보험법」에 따른 고용보험, 「산업재해보상보험법」에 따른 산업재해보상보험을 말한다. '
        },   
    ])

    const [articles, setArticles] = useState([
        {
            source: '해럴드경제',
            headline: "화성 참사 외국인, '미가입'도 산재 보상...정보 부족에 두 번 우는 외국인",
            summary: "한국보건사회연구원은 보고서에서 '외국인 근로자의 산재에 대한 낮은 인식이 낮은 가입률로 이어졌고 이들에 대한 사회안전망을 더 취약하게 만들었다'고 평가",
            url: 'https://n.news.naver.com/mnews/article/016/0002327552',
            imgURL: process.env.PUBLIC_URL+'/accident.jpg',
            datetime: "2024.06.27. 08:24"
        }, 
        {
            source: '한국경제',
            headline: "외국인 근로자 수 1위 화성…'이 사람들 놓치면 공장 문 닫을 판'",
            summary: "제조업체 전국서 가장 많은데다 대부분 3D직종, 외국인 고용 늘어 '외국인력 없인 현장 안 돌아간다'",
            url: 'https://www.hankyung.com/article/2023102691871',
            imgURL: process.env.PUBLIC_URL+'/workers2.jpg',
            datetime: "2023.11.03 19:27"
        }, 
        {
            source: '매거진한경',
            headline: "해외취업 선택하는 청년들, 현실은?",
            summary: "2030세대 10명 중 8명 이상이 해외 취업 원해···한국보다 업무환경 좋고 수평적 관계",
            imgURL: process.env.PUBLIC_URL+'/workers.jpg',
            url: 'https://magazine.hankyung.com/job-joy/article/202306280769d',
            datetime: "2023.06.28 16:57"
        },
    ])

    return (
        <>
            <HomePresenter bow={bow} articles={articles} />
        </>
    );
};

export default HomeContainer;