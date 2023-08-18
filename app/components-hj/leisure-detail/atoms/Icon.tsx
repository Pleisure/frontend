import { MouseEventHandler } from 'react';

export interface Iicon {
  className: string;
  viewBox?: string | undefined;
  fill?: string | undefined;
  stroke?: string | undefined;
  strokeWidth?: string | number | undefined;
  strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit' | undefined;
  strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
  strokeLinecap2?: 'round' | 'butt' | 'square' | 'inherit' | undefined;
  strokeLinejoin2?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
  pathD: string;
  isPathDtwo?: boolean;
  pathD2?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export default function Icon({
  className,
  viewBox,
  fill,
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  strokeLinecap2,
  strokeLinejoin2,
  pathD,
  isPathDtwo,
  pathD2,
  onClick,
}: Iicon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClick}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        d={pathD}
      />
      {isPathDtwo && (
        <path
          strokeLinecap={strokeLinecap2}
          strokeLinejoin={strokeLinejoin2}
          d={pathD2}
        />
      )}
    </svg>
  );
}
