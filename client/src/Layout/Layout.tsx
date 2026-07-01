import type { ReactNode } from 'react';
import Header from './Header/Header.tsx';

import '../index.css';

export default function Layout({
  children,
}: {
  children: ReactNode;
  withLeftBanner?: boolean;
  withRightBanner?: boolean;
}) {
  return (
    <div>
      <Header />
      <div className="flex-col items-center pt-4 md:pt-6 pb-4 md:pb-6 bg-backgroundElevated md:bg-background min-h-[calc(100vh-70px)]">

          <div className="flex-col items-center md:gap-3">{children}</div>

      </div>
    </div>
  );
}
