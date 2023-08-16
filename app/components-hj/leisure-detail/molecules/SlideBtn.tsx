import { MouseEventHandler } from 'react';
import Icon from '../atoms/Icon';

interface Props {
  direction: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  IconPathD: string;
}

export default function SlideBtn({ direction, onClick, IconPathD }: Props) {
  return (
    <div
      className={`absolute bottom-[46%] cursor-pointer p-[2px] hover:bg-[rgba(255,255,255,0.5)] hover:rounded-full transition-all ${
        direction === 'prev' ? 'prevBtn left-2' : 'nextBtn right-2'
      }`}
      onClick={onClick}
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
    </div>
  );
}
