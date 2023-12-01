export interface IiconSvg {
  className: string;
  viewBox?: string | undefined;
  fill?: string | undefined;
  stroke?: string | undefined;
  strokeWidth?: string | number | undefined;
  strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit' | undefined;
  strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
  pathD: string;
}

export default function IconSvg({
  className,
  viewBox,
  fill,
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  pathD,
}: IiconSvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <path
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        d={pathD}
      />
    </svg>
  );
}
