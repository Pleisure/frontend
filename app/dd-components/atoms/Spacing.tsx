import joinStrings from '@/app/dd-libs/utils/joinStrings';

interface Props {
  children?: never;
  size?: 'small' | 'medium' | 'large' | number;
}

export default function Spacing({ size = 0 }: Props) {
  let spacing;
  switch (size) {
    case 'small':
      spacing = 'h-[10px]';
      break;
    case 'medium':
      spacing = 'h-[24px]';
      break;
    case 'large':
      spacing = 'h-[40px]';
      break;
    default:
      spacing = `h-[${size}px]`;
      break;
  }
  return <div className={joinStrings('bg-transparent flex-none', spacing)} />;
}
