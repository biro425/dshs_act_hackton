import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function About() {
  return (
    <div className="main-bg">
      <nav className="main-nav">
        <div className="nav-left"></div>
        <ul className="nav-menu">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/about">소개</Link></li>
          <li><Link to="/schedule">일정</Link></li>
          <li><Link to="/award">수상</Link></li>
        </ul>
        <button className="apply-btn">지원하기</button>
      </nav>
      <div className="about-plain">
        <h1 className="about-title about-title-large">소개</h1>
        <div className="about-desc-list">
          <div className="about-desc-item"><b>DSHS HACK@HON</b>은 대전 대신고등학교에서 개최되는 창의적이고 혁신적인 해커톤 대회입니다.</div>
          <div className="about-desc-item"><b>목적:</b> 학생들이 팀을 이루어 다양한 아이디어를 실제 소프트웨어/하드웨어로 구현하며, 협업과 문제해결 능력을 기릅니다.</div>
          <div className="about-desc-item"><b>주요 특징:</b></div>
          <ul className="about-feature-list">
            <li>자유 주제, 자유 팀 빌딩</li>
            <li>실전 개발 경험과 멘토링</li>
            <li>다양한 시상 및 부상</li>
            <li>2025년 7월 31일 ~ 8월 2일, 대전 대신고등학교에서 진행</li>
          </ul>
          <div className="about-desc-item">여러분의 많은 관심과 참여 바랍니다!</div>
        </div>
      </div>
    </div>
  );
}

export default About; 