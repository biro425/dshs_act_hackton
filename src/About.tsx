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
          <li><Link to="/award">특전</Link></li>
        </ul>
        <button className="apply-btn" onClick={() => window.open('https://forms.gle/V8zoRb5u1h5U6baX6', '_blank')}>지원하기</button>
      </nav>
      <div className="page-container">
        <div style={{ marginBottom: '32px', marginTop: '8px' }}>
          <div style={{ fontSize: '2.7rem', fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.02em', marginRight: '48px', marginLeft: '48px' }}>Introduce</div>
          <div style={{ width: '100%', height: '2px', background: '#fff', opacity: 0.8, marginBottom: '32px' }}></div>
        </div>
        <div className="about2-main-row" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '80px', marginTop: '0', marginBottom: '0' }}>
          <div className="about2-left" style={{ flex: 1, minWidth: '420px', maxWidth: '600px' }}>
            <div className="about2-section" style={{ marginBottom: '12px', marginTop: '32px' }}>
              <div className="about2-title" style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '18px' }}>Topic</div>
              <div className="about2-desc" style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 300 }}>
                이번 해커톤의 목적은 대전 지역 문제 해결을 위한 <span style={{ color: '#40C0B3', fontWeight: 700 }}>창의적 솔루션 개발</span>에 있습니다.<br />
                목적 달성을 위하여 다양한 분야에서 여러분들만의 창의적인 서비스를 구축해보세요!
              </div>
            </div>
            <div className="about2-section" style={{ marginBottom: '12px' }}>
              <div className="about2-title" style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '18px' }}>Mentoring</div>
              <div className="about2-desc" style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 300 }}>
                3일간 여러분의 개발 및 창업을 돕기위하여 <span style={{ color: '#40C0B3', fontWeight: 700 }}>기술, 아이디어 멘토</span> 분들을 초청했습니다.<br />
                멘토분들께 기술적 문제 해결, 개발 방향성 제시, 코드 리뷰 등 개발 과정에서 다양한 도움을 받아보세요!
              </div>
            </div>
            <div className="about2-section">
              <div className="about2-title" style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '18px' }}>Evaluate</div>
              <div className="about2-desc" style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 300 }}>
                <span style={{ color: '#40C0B3', fontWeight: 700 }}>공정한 평가</span>를 위하여 일관성 있는 기준을 적용합니다.<br />
                각 항목별로 산출물을 평가하며, 그 비율은 우측 원그래프를 따릅니다.
              </div>
            </div>
          </div>
          <div className="about2-right" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', minWidth: '420px', marginLeft: '-40px', marginTop: '32px' }}>
            <div className="about2-donut-wrap" style={{ position: 'relative', width: '460px', height: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/g.png" alt="평가 기준 도넛 차트" className="about2-donut-img" style={{ width: '460px', height: '460px' }} />
            </div>
            <ul className="about2-legend-list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', fontWeight: 500, marginLeft: '0' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}><span className="about2-legend-box box1" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', display: 'inline-block' }}></span>문제 해결</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}><span className="about2-legend-box box2" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', display: 'inline-block' }}></span>창의성</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}><span className="about2-legend-box box3" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', display: 'inline-block' }}></span>실현 가능성</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}><span className="about2-legend-box box4" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', display: 'inline-block' }}></span>산출물 완성도</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}><span className="about2-legend-box box5" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', display: 'inline-block' }}></span>소통 및 협업</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="schedule-footer">
        <div className="schedule-footer-address">
          대전광역시 중구 대흥로 128번길 30, 대신고등학교
        </div>
        <div className="schedule-footer-logo">
          <img src="/act.png" alt="act.ke logo" style={{ height: '56px', width: 'auto' }} />
        </div>
      </footer>
    </div>
  );
}

export default About; 