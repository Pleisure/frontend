import Spacing from '../atoms/Spacing';
import Header, { HeaderProps } from './Header';
import Footer, { FooterProps } from './Footer';
import joinClassNames from '@/app/libs-dd/utils/joinClassNames';

interface Props {
  header: HeaderProps;
  footer: FooterProps;
  children: React.ReactNode;
}

export default function PageLayout({ header, footer, children }: Props) {
  const MAX_WIDTH = 'max-w-md';
  const BODY_WITHOUT_FOOTER = 'h-[calc(100vh-84px)]';
  const BODY_WITH_FOOTER = 'h-[calc(100vh-172px)]';

  return (
    <div className='w-screen h-screen bg-slate-200'>
      <div className={joinClassNames('h-screen m-auto overflow-hidden bg-white', MAX_WIDTH)}>
        <div className={joinClassNames('fixed top-0 z-50 w-full h-[84px]', MAX_WIDTH)}>
          <Header
            type={header.type}
            title={header.title}
            left={header.left}
            right={header.right}
            hasBorder={header.hasBorder}
          />
        </div>

        <div className={joinClassNames('z-10 w-full bg-slate-300 h-full')}>
          <Spacing size={84} />
          <div
            className={joinClassNames(
              'w-full overflow-y-scroll scrollbar-hide',
              footer.type === 'none' || footer.type === 'buttons' ? BODY_WITHOUT_FOOTER : BODY_WITH_FOOTER
            )}
          >
            {children}
          </div>
          <Spacing size={88} />
        </div>

        <div className={joinClassNames('fixed bottom-0 z-50 w-full h-[92px]', MAX_WIDTH)}>
          <Footer type={footer.type} root={footer.root}>
            {footer.children}
          </Footer>
        </div>
      </div>
    </div>
  );
}
