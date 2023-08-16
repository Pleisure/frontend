'use client';

import { useState } from 'react';
import Map from './molecules/Map';
import CEOInfo from './CEOInfo';
import Icon from './atoms/Icon';

export default function StoreInfo() {
  const [show, setShow] = useState(false);

  return (
    <section className="px-4 store-info">
      <div className="detail-info">
        <div className="flex gap-5 mb-3 store-business-hours">
          <p className="flex items-center font-bold">
            <Icon
              className="w-5 h-5 mr-2 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathD="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <span>영업 중</span>
          </p>
          <div className="flex items-center bussiness-hours">
            <p>오후 10:00까지</p>
            <Icon
              className="flex items-center w-[1.2rem] h-[1.2rem] ml-1 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathD="M19 9l-7 7-7-7"
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
        {show && (
          <ul className="hours-list ml-[1.69rem] mb-5 text-sm">
            {BUSINESS_HOURS_LIST.map(({ day, openHours, closeHours }) => {
              return (
                <li key={day} className="mb-[0.4rem]">
                  <span className="mr-[3.2rem]">{day}</span>
                  <span>
                    {openHours === ''
                      ? '휴무일'
                      : `${openHours} - ${closeHours}`}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
        {STORE_INFO.map(({ infoId, iconTag, content }) => {
          return (
            <p key={infoId} className="flex items-center mb-3">
              <Icon
                className="w-5 h-5 mr-2 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathD={iconTag}
                isPathDtwo={infoId === 3 ? true : false}
                strokeLinecap2={infoId === 3 ? 'round' : undefined}
                strokeLinejoin2={infoId === 3 ? 'round' : undefined}
                pathD2={
                  infoId === 3 ? 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' : undefined
                }
              />
              <span>{content}</span>
            </p>
          );
        })}
      </div>
      <Map />
      <CEOInfo />
    </section>
  );
}

const STORE_INFO = [
  {
    infoId: 1,
    info: 'number',
    iconTag:
      'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    content: '010-1234-5678',
  },
  {
    infoId: 2,
    info: 'link',
    iconTag:
      'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
    content: 'https://ppazziworld.com',
  },
  {
    infoId: 3,
    info: 'address',
    iconTag:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    content: '경기 가평군 가평읍 북한강변로 274-22',
  },
];

const BUSINESS_HOURS_LIST = [
  { day: '월', openHours: '', closeHours: '' },
  { day: '화', openHours: '11:00 am', closeHours: '09:00 pm' },
  { day: '수', openHours: '11:00 am', closeHours: '09:00 pm' },
  { day: '목', openHours: '11:00 am', closeHours: '09:00 pm' },
  { day: '금', openHours: '11:00 am', closeHours: '09:00 pm' },
  { day: '토', openHours: '11:00 am', closeHours: '09:00 pm' },
  { day: '일', openHours: '', closeHours: '' },
];
