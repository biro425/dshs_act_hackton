import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Schedule() {
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
      <div className="schedule-vertical">
        <div className="schedule-date schedule-date-large">7/31</div>
        <ul className="schedule-list">
          <li><span className="schedule-time">08:40 ~ 09:00</span> 등록 및 1일차 출석확인 <span className="schedule-place">(1층 스터디카페)</span></li>
          <li><span className="schedule-time">09:10 ~ 09:50</span> 개회식, 안전교육, 캠프안내, 기념사진 <span className="schedule-place">(4층 시청각실)</span></li>
          <li><span className="schedule-time">10:00 ~ 11:30</span> 기조강연 1 : 창업과 혁신의 이해</li>
          <li><span className="schedule-time">11:30 ~ 13:00</span> 점심식사</li>
          <li><span className="schedule-time">13:00 ~ 14:30</span> 기조강연 2 : 벤처기업 창업 사례 공유</li>
          <li><span className="schedule-time">14:30 ~ 14:50</span> 분야별 교실 배정, 이동</li>
          <li><span className="schedule-time">15:00 ~ 18:00</span> 아이디어 도출 및 사업성 검토</li>
        </ul>
        <div className="schedule-date schedule-date-large">8/1</div>
        <ul className="schedule-list">
          <li><span className="schedule-time">08:40 ~ 09:00</span> 2일차 출석 확인 <span className="schedule-place">(각 팀별 공간)</span></li>
          <li><span className="schedule-time">09:00 ~ 13:00</span> 집중작업1 핵심기능 개발 <span className="schedule-place">(각 팀별 공간)</span></li>
          <li><span className="schedule-time">12:00 ~ 13:00</span> 점심식사 <span className="schedule-place">(각 팀별 공간)</span></li>
          <li><span className="schedule-time">13:00 ~ 17:30</span> 집중작업2 UI/UX 구현 <span className="schedule-place">(각 팀별 공간)</span></li>
          <li><span className="schedule-time">17:30 ~ 19:00</span> 저녁식사 <span className="schedule-place">(각 팀별 공간)</span></li>
          <li><span className="schedule-time">19:00 ~ 21:00</span> 집중작업3 기능완성 및 테스트 <span className="schedule-place">(각 팀별 공간)</span></li>
          <li><span className="schedule-time">21:00 ~ 22:00</span> 중간 점검 및 피드백 <span className="schedule-place">(부문별 공간)</span></li>
        </ul>
        <div className="schedule-date schedule-date-large">8/2</div>
        <ul className="schedule-list">
          <li><span className="schedule-time">09:00 ~ 11:00</span> 시연(심사) 및 스탠딩 세션 <span className="schedule-place">(팀별 자유공간)</span></li>
          <li><span className="schedule-time">11:00 ~ 12:00</span> 점심 식사 <span className="schedule-place">(온라인)</span></li>
          <li><span className="schedule-time">12:00 ~ 13:30</span> 최종 심사 <span className="schedule-place">(온라인)</span></li>
          <li><span className="schedule-time">13:30 ~ 14:00</span> 시상식 <span className="schedule-place">(온라인)</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Schedule; 