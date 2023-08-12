interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <div className='w-full bg-white shadow-md'>
      <div className='w-full'>{children}</div>
    </div>
  );
}
