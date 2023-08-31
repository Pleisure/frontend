import joinClassNames from '@/app/libs-dd/utils/joinClassNames';

interface Props {
  isHeightFull?: boolean;
  children: React.ReactNode;
}

export default function Section({ isHeightFull = false, children }: Props) {
  return (
    <section className={joinClassNames('w-full bg-white shadow-md', isHeightFull ? 'h-full' : '')}>
      <div className='w-full'>{children}</div>
    </section>
  );
}
