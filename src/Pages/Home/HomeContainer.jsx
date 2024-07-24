import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { totalList } from '../FAQ/faqDB';
import NewsDetail from './NewsDetail';

const HomeContainer = () => {
  const [bow, setBow] = useState([
    {
      index: 1023,
      views: 1098,
      type: '환경/복지',
      headline: '진정·고소 제기 이후에도 체불임금을 지급받지 못한 경우 권리구제 절차',
      summary: '근로자의 임금을 체불한 사업주가 근로기준법 위반으로 형사상 처벌을 받는다고 하더라도 민사소송 등을 통해 체불임금을 지급받을 수 있습니다.',
    },
    {
      index: 2488,
      views: 792,
      type: '법률용어',
      headline: '2차전지 또는 배터리',
      summary: '화학반응에 따라 전기에너지를 저장하고 내보낼 수 있는 재충전이 가능한 전기화학시스템을 갖는 전지 또는 배터리를 말한다.',
    },
    {
      index: 873,
      views: 543,
      type: '현행법령',
      headline: '고용산재보험신고법',
      summary: '제1조(목적) 이 법은 「고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률」에 따른 보험관계 성립신고와 「고용보험법」에 따른 피보험자격 취득신고의 비율이 낮은...',
    },
    {
      index: 2176,
      views: 277,
      type: '법률용어',
      headline: '4대보험',
      summary: ' 「국민연금법」에 따른 국민연금, 「국민건강보험법」에 따른 국민건강보험(「노인장기요양보험법」에 따른 장기요양보험을 포함한다), 「고용보험법」에 따른 고용보험, 「산업재해보상보험법」에 따른 산업재해보상보험을 말한다.',
    },
  ]);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/news_data.json')
      .then(response => response.json())
      .then(data => {
        // 데이터에서 필요한 필드만 추출하여 새로운 배열로 생성
        const extractedArticles = data.map(item => ({
          source: item.news_agency,
          headline: item.title,
          summary: item.summary,
          url: item.news_link,
          imgURL: item.image_link,
          datetime: item.time,
          content: item.news_content,
        }));
        setArticles(extractedArticles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <HomePresenter bow={totalList.slice(0, 4)} articles={articles} />
    </>
  );
};

export default HomeContainer;