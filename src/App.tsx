import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './About';
import Schedule from './Schedule';
import Award from './Award';

function MainPage() {
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
      <main className="main-content">
        <div className="main-title-row">
          <img src="/1.png" alt="1 symbol" className="main-title-img" />
          <span className="main-title">HACK <img src="/@.png" alt="at symbol" className="main-title-at-img" />HON</span>
        </div>
        <div className="main-sub-row">
          <span className="main-sub-symbol">&#123;<img src="/sss.png" alt="지구" className="main-sub-globe" />&#125;</span>
          <span className="main-sub-title">WRITTEN IN CODE</span>
          <span className="main-sub-info">@daeshin high school</span>
          <span className="main-sub-info">@ 2025. 07. 31 ~ 08. 02</span>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/award" element={<Award />} />
      </Routes>
    </Router>
  );
}

export default App; 