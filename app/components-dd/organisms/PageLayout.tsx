import joinClassNames from '@/app/libs-dd/utils/joinClassNames';
import Spacing from '../atoms/Spacing';
import Header, { HeaderProps } from './Header';
import Footer, { FooterProps } from './Footer';

interface Props {
  header: HeaderProps;
  footer: FooterProps;
  children: React.ReactNode;
}

export default function PageLayout({ header, footer, children }: Props) {
  let maxWidth = 'max-w-md';
  let bodyHeight = 'h-[calc(100vh-172px)]';

  return (
    <div className='w-screen h-screen bg-slate-200'>
      <div className={joinClassNames('h-screen m-auto overflow-hidden bg-white', maxWidth)}>
        <div className={joinClassNames('fixed top-0 z-50 w-full h-[84px]', maxWidth)}>
          <Header type={header.type} />
        </div>

        <div className={joinClassNames('z-10 w-full bg-slate-300 h-full')}>
          <Spacing size={84} />
          <div className={joinClassNames('w-full space-y-3 overflow-y-scroll scrollbar-hide', bodyHeight)}>{children}</div>
          <Spacing size={88} />
        </div>

        <div className={joinClassNames('fixed bottom-0 z-50 w-full h-[92px]', maxWidth)}>
          <Footer type={footer.type} root={footer.root} />
        </div>
      </div>
    </div>
  );
}
