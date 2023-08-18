import IconSvg from '../atoms/IconSvg';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className="flex px-4 pt-8 pb-3">
      <div className="flex items-center justify-center cursor-pointer">
        <IconSvg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathD="M15 19l-7-7 7-7"
        />
      </div>
      <p className="w-full mr-4 text-xl font-bold text-center">{title}</p>
    </header>
  );
}
