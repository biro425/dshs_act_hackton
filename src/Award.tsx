import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const perks = [
  { text: <>상위 <b className="perk-color">3팀</b> 후속 발표 기회 제공</> },
  { text: <>참가자 대상 <b className="perk-color">이수증</b> 발급</> },
  { text: <> <b className="perk-color">차년도</b> 행사 활동 기회 제공</> },
  { text: <>창업 희망 팀 <b className="perk-color">멘토링</b> 연계</> },
  { text: <>우수작 <b className="perk-color">지역 사회 연계</b> 방안 모색</> },
];

function Award() {
  return (
    <div className="page-container">
      <div className="main-bg">
        <nav className="main-nav">
          <div className="nav-left"></div>
          <ul className="nav-menu">
            <li><Link to="/">홈</Link></li>
            <li><Link to="/about">소개</Link></li>
            <li><Link to="/schedule">일정</Link></li>
            <li><Link to="/award">특전</Link></li>
          </ul>
          <button className="apply-btn">지원하기</button>
        </nav>
        <div style={{ marginBottom: '32px', marginTop: '8px' }}>
          <div style={{ fontSize: '2.7rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em', marginLeft: '48px' }}>Perks</div>
          <div style={{ width: '100%', height: '2px', background: '#fff', opacity: 0.8, marginBottom: '32px' }}></div>
        </div>
        <div className="perks-content-row">
          <div className="perks-timeline-container">
            {perks.map((perk, idx) => (
              <div className="perks-timeline-row" key={idx}>
                <div className="perks-timeline-dotcol">
                  <div className="perks-timeline-dot">
                    <span className="perks-timeline-dot-num">{idx + 1}</span>
                  </div>
                  {idx !== perks.length - 1 && <div className="perks-timeline-line"></div>}
                </div>
                <div className="perks-timeline-content">{perk.text}</div>
              </div>
            ))}
          </div>
          <div className="perks-imgs">
            <div className="perk-img-col">
              <img src="/t.png" alt="티셔츠" className="perk-img" />
              <div className="perk-img-desc">참가자 전원 티셔츠 제공</div>
            </div>
            <div className="perk-img-col">
              <img src="/d.png" alt="도시락" className="perk-img" />
              <div className="perk-img-desc">참가자 전원 중,석식 제공</div>
            </div>
          </div>
        </div>
        <div className="schedule-footer">
          <div className="schedule-footer-address">
            98, Oryang 1-gil,<br />
            Seo-gu,<br />
            Daejeon, Republic of Korea
          </div>
          <div className="schedule-footer-logo">
            <img src="/act.png" alt="act.ke logo" style={{ height: '56px', width: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award; 