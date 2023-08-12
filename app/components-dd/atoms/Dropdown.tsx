import joinStrings from '@/app/dd-libs/utils/joinStrings';
interface Props {
  isOpen?: boolean;
  children: React.ReactNode;
}

export default function Dropdown({ isOpen = false, children }: Props) {
  return (
    <div className={joinStrings('relative', isOpen ? '' : 'hidden')}>
      <div className={'absolute top-4 left-0 py-2 bg-white rounded-md shadow-sm'}>{children}</div>
    </div>
  );
}
