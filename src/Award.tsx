import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Award() {
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
        <button className="apply-btn" onClick={() => window.open('https://forms.gle/V8zoRb5u1h5U6baX6', '_blank')}>지원하기</button>
      </nav>
      <div style={{margin: '10vh 0 0 8vw', color: '#fff'}}>
        <h1 style={{fontSize: '2.2rem', fontWeight: 700, marginBottom: '2vw'}}>수상 내역 안내</h1>
        <p style={{fontSize: '1.1rem', marginBottom: '2vw'}}>이번 해커톤에서는 아래와 같이 수상팀이 선정됩니다.</p>
        <ul style={{fontSize: '1.1rem', lineHeight: 2, paddingLeft: 0, listStyle: 'none'}}>
          <li>🏆 대상 1팀</li>
          <li>🥈 은상 2팀</li>
          <li>🥉 동상 3팀</li>
        </ul>
        <p style={{fontSize: '1rem', color: '#bdbdbd', marginTop: '2vw'}}>※ 실제 수상팀 정보는 행사 종료 후 공개됩니다.</p>
      </div>
    </div>
  );
}

export default Award; 