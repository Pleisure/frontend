import joinClassNames from '@/app/libs-dd/utils/joinClassNames';

interface Props {
  children?: never;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | number;
  dir?: 'horizontal' | 'vertical';
}

export default function Spacing({ size = 0, dir = 'horizontal' }: Props) {
  let spacing;
  switch (size) {
    case 'xsmall':
      dir === 'horizontal' ? (spacing = 'h-1') : (spacing = 'w-1');
      break;
    case 'small':
      dir === 'horizontal' ? (spacing = 'h-[10px]') : (spacing = 'w-5');
      break;
    case 'medium':
      dir === 'horizontal' ? (spacing = 'h-[24px]') : (spacing = 'w-8');
      break;
    case 'large':
      dir === 'horizontal' ? (spacing = 'h-[40px]') : (spacing = 'w-10');
      break;
    default:
      dir === 'horizontal' ? (spacing = `h-[${size}px]`) : (spacing = `w-[${size}px]`);
      break;
  }
  return <div className={joinClassNames('bg-transparent flex-none w-', spacing)} />;
}
