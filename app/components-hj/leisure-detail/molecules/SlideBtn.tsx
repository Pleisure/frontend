import { MouseEventHandler } from 'react';
import Icon from '../atoms/Icon';

interface Props {
  direction: string;
  onMouseUp: MouseEventHandler<HTMLDivElement>;
  IconPathD: string;
}

export default function SlideBtn({ direction, onMouseUp, IconPathD }: Props) {
  return (
    <div
      className={`absolute bottom-[46%] cursor-pointer p-[2px] transition duration-[100ms] rounded-full ${
        direction === 'prev' ? 'prevBtn left-2' : 'nextBtn right-2'
      }`}
      onMouseUp={onMouseUp}
    >
      <Icon
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathD={IconPathD}
      />
      <style jsx>{`
        // 데스크탑 버전에서만 hover 작동하고, 터치패드에서는 hover style이 작동하지 않게 하는 media query
        @media (hover: hover) and (pointer: fine) {
          .prevBtn:hover {
            background-color: rgba(255, 255, 255, 0.5);
          }
          .nextBtn:hover {
            background-color: rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </div>
  );
}
