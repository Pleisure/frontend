'use client';

import { useState } from 'react';
import CEOInfo from './CEOInfo';
import Icon from '../atoms/Icon';
import Map from '../molecules/Map';
import { IStores } from '@/app/types-hj/IStores';

interface Props extends IStores {
  closingHours: string | undefined;
}

export default function StoreInfo({
  storeStatus = 'CLOSING',
  storeBusinessHours,
  closingHours = '시간 정보 없음',
}: Props) {
  const [show, setShow] = useState(false);

  function dayName(dayOfWeek: string) {
    let day = '';
    switch (dayOfWeek) {
      case 'MON':
        day = '월';
        break;
      case 'TUE':
        day = '화';
        break;
      case 'WED':
        day = '수';
        break;
      case 'THU':
        day = '목';
        break;
      case 'FRI':
        day = '금';
        break;
      case 'SAT':
        day = '토';
        break;
      case 'SUN':
        day = '일';
        break;
    }
    return day;
  }

  function currentStatue(storeStatus: string) {
    let status = '';
    switch (storeStatus) {
      case 'OPENNING':
        status = '영업 중';
        break;
      case 'CLOSING':
        status = '휴업 중';
        break;
      case 'SHUT_DOWN':
        status = '폐업 상태';
        break;
    }
    return status;
  }

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
            <span>{currentStatue(storeStatus)}</span>
          </p>
          <div className="flex items-center bussiness-hours">
            <p>{closingHours}까지</p>
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
            {storeBusinessHours?.map(
              ({
                dayOfWeek = '정보 없음',
                openingHours,
                closingHours,
                businessHourStatus,
              }) => {
                return (
                  <li key={dayOfWeek} className="mb-[0.4rem]">
                    <span className="mr-[3.2rem]">{dayName(dayOfWeek)}</span>
                    <span>
                      {businessHourStatus === 'CLOSED'
                        ? '휴무일'
                        : `${openingHours} - ${closingHours}`}
                    </span>
                  </li>
                );
              }
            )}
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
