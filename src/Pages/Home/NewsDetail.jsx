import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = ({ articles }) => {
  const { id } = useParams(); // URL 파라미터에서 id 추출

  if (!articles) {
    return <h1>뉴스를 찾을 수 없습니다.1</h1>;
  }

  // articles 배열에서 id에 해당하는 뉴스 항목 찾기
  const article = articles.find(item => {
    const urlParts = item.url.split('/');
    const newsId = urlParts[urlParts.length - 1];
    return newsId === id;
  });

  if (!article) {
    return <h1>뉴스를 찾을 수 없습니다.2</h1>;
  }

  return (
    <div className="news-detail">
      <h2>{article.headline}</h2>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">원문 보기</a>
    </div>
  );
};

export default NewsDetail;