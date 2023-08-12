import joinStrings from '@/app/dd-libs/utils/joinStrings';
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
      <div className={joinStrings('h-screen m-auto overflow-hidden bg-white', maxWidth)}>
        <div className={joinStrings('fixed top-0 z-50 w-full h-[84px]', maxWidth)}>
          <Header type={header.type} />
        </div>

        <div className={joinStrings('z-10 w-full bg-slate-300 h-full')}>
          <Spacing size={84} />
          <div className={joinStrings('w-full space-y-3 overflow-y-scroll scrollbar-hide', bodyHeight)}>{children}</div>
          <Spacing size={88} />
        </div>

        <div className={joinStrings('fixed bottom-0 z-50 w-full h-[92px]', maxWidth)}>
          <Footer type={footer.type} root={footer.root} />
        </div>
      </div>
    </div>
  );
}
