import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const scheduleDataList = [
  {
    date: 'Thu 31',
    items: [
      {
        time: '08:40 ~ 09:00',
        title: '등록 및 1일차 출석 확인',
        place: '1층, 스터디 카페',
        fixedWidth: undefined,
      },
      {
        time: '09:10 ~ 09:50',
        title: '개회식, 안전교육, 캠프 안내, 기념사진',
        place: '4층, 시청각실',
        fixedWidth: undefined,
      },
      {
        time: '10:00 ~ 11:30',
        title: '기조강연 1 : 창업과 혁신의 이해',
        place: '4층, 시청각실',
        fixedWidth: undefined,
      },
      {
        time: '11:30 ~ 13:00',
        title: '점심식사',
        place: '자유 공간',
        fixedWidth: undefined,
      },
      {
        time: '13:00 ~ 14:30',
        title: '기조강연 2 : 벤처기업 창업사례 공유',
        place: '4층, 시청각실',
        fixedWidth: undefined,
      },
      {
        time: '14:30 ~ 14:50',
        title: '분야별 교실 배정, 이동',
        place: '이동',
        fixedWidth: undefined,
      },
      {
        time: '15:00 ~ 18:00',
        title: '아이디어 도출 및 사업성 검토',
        place: '각 교실',
        fixedWidth: 1000,
      },
    ],
  },
  {
    date: 'Fri 1',
    items: [
      {
        time: '08:40 ~ 09:00',
        title: '2일차 출석 확인',
        place: '각 교실',
        fixedWidth: undefined,
      },
      {
        time: '09:00 ~ 13:00',
        title: '집중작업1 핵심기능 개발',
        place: '각 교실',
        fixedWidth: undefined,
      },
      {
        time: '12:00 ~ 13:00',
        title: '점심식사',
        place: '각 교실',
        fixedWidth: undefined,
      },
      {
        time: '13:00 ~ 17:30',
        title: '집중작업2 UI/UX 구현',
        place: '각 교실',
        fixedWidth: undefined,
      },
      {
        time: '17:30 ~ 19:00',
        title: '저녁식사',
        place: '각 교실',
        fixedWidth: undefined,
      },
      {
        time: '19:00 ~ 21:00',
        title: '집중작업3 기능완성 및 테스트',
        place: '각 교실',
        fixedWidth: undefined,
      },
      {
        time: '21:00 ~ 22:00',
        title: '중간 점검 및 피드백',
        place: '부문별 공간',
        fixedWidth: undefined,
      },
    ],
  },
  {
    date: 'Sat 2',
    items: [
      {
        time: '09:00 ~ 11:00',
        title: '시연(심사) 및 스탠딩 세션',
        place: '팀별 자유공간',
        fixedWidth: undefined,
      },
      {
        time: '11:00 ~ 12:00',
        title: '점심 식사',
        place: '온라인',
        fixedWidth: undefined,
      },
      {
        time: '12:00 ~ 13:30',
        title: '최종 심사',
        place: '온라인',
        fixedWidth: undefined,
      },
      {
        time: '13:30 ~ 14:00',
        title: '시상식',
        place: '온라인',
        fixedWidth: undefined,
      },
    ],
  },
];

type TimelineRowProps = {
  time: string;
  title: string;
  place: string;
  isFirst: boolean;
  isLast: boolean;
  fixedWidth?: number;
};

function getBarWidth(time: string) {
  const [start, end] = time.split('~').map(t => t.trim());
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  const diff = Math.max(0, endMin - startMin);
  return (diff / 10) * 100;
}

function TimelineRow({ time, title, place, isFirst, isLast, fixedWidth }: TimelineRowProps) {
  const barWidth = fixedWidth !== undefined ? fixedWidth : getBarWidth(time);
  return (
    <div className="timeline-row-single">
      <div className="timeline-dotcol-single">
        <div className={`timeline-dot-single`}></div>
        {!isLast && <div className="timeline-line-single"></div>}
      </div>
      <div className="timeline-time-single">{time}</div>
      <div
        className={`timeline-bar-single`}
        style={{ width: barWidth + 'px' }}
      ></div>
      <div className="timeline-desc-single">
        <div>{title}</div>
        <div>{place}</div>
      </div>
    </div>
  );
}

function Schedule() {
  const [page, setPage] = useState(0); // 0: Thu 31, 1: Fri 1
  const scheduleData = scheduleDataList[page];

  return (
    <div className="main-bg">
      <div className="page-container">
        <nav className="main-nav">
          <div className="nav-left"></div>
          <ul className="nav-menu">
            <li><Link to="/">홈</Link></li>
            <li><Link to="/about">소개</Link></li>
            <li><Link to="/schedule">일정</Link></li>
            <li><Link to="/award">특전</Link></li>
          </ul>
          <button className="apply-btn" onClick={() => window.open('https://forms.gle/FuaHAqvU9HWTKJMS9', '_blank')}>
            지원하기
          </button>
        </nav>
        <div className="schedule-header-bar" style={{ marginTop: '8px' }}>
          <span
            className="schedule-header-arrow schedule-header-arrow-left"
            style={{ cursor: page > 0 ? 'pointer' : 'default', opacity: page > 0 ? 1 : 0.3 }}
            onClick={() => page > 0 && setPage(page - 1)}
          >
            &#8592;
          </span>
          <span className="schedule-header-date">{scheduleData.date}</span>
          <span
            className="schedule-header-arrow schedule-header-arrow-right"
            style={{ cursor: page < scheduleDataList.length - 1 ? 'pointer' : 'default', opacity: page < scheduleDataList.length - 1 ? 1 : 0.3 }}
            onClick={() => page < scheduleDataList.length - 1 && setPage(page + 1)}
          >
            &#8594;
          </span>
        </div>
        <div className="schedule-header-line"></div>
        <div style={{ marginTop: '40px' }}>
          {scheduleData.items.map((item, idx) => (
            <TimelineRow
              key={idx}
              time={item.time}
              title={item.title}
              place={item.place}
              isFirst={idx === 0}
              isLast={idx === scheduleData.items.length - 1}
              fixedWidth={item.fixedWidth}
            />
          ))}
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

export default Schedule; 