interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <section className='w-full bg-white shadow-md'>
      <div className='w-full'>{children}</div>
    </section>
  );
}
