import type { ReactNode } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/tailgrids/core/sidebar';
import { Home, Eye } from '@tailgrids/icons';
import { forwardRef, type SVGProps } from 'react';
import { mergeProps } from 'react-aria';
import Header from './Header/Header.tsx';

import '../../index.css';

const items = [
  { title: 'Home', url: '/', icon: Home },
  {
    title: 'Experiments',
    url: '/experiments',
    icon: Eye,
  },
];

const SidebarMenuItemLink = forwardRef<
  HTMLAnchorElement,
  {
    title: string;
    url: string;
    icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    [key: string]: any;
  }
>(({ title, url, icon: Icon, ...props }, ref) => {
  return (
    <a
      {...mergeProps(props, {
        href: url,
        className: 'flex items-center gap-2',
      })}
      ref={ref}
    >
      <Icon />
      <span>{title}</span>
    </a>
  );
});

function SidebarContainer() {
  return (
    <Sidebar className="h-full">
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    render={({ ref, ...props }) => (
                      <SidebarMenuItemLink
                        title={item.title}
                        url={item.url}
                        icon={item.icon}
                        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
                        {...props}
                      />
                    )}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default function Layout({
  children,
}: {
  children: ReactNode;
  withLeftBanner?: boolean;
  withRightBanner?: boolean;
}) {
  return (
    <div className="flex min-h-screen h-100 w-full rounded-md border border-base-200 overflow-hidden bg-background-100">
      <SidebarProvider className="h-full">
        <SidebarContainer />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-auto p-6 bg-background-50">
            <div className="h-full rounded-xl border border-base-200 p-4">
              <p className="text-sm text-text-400">{children}</p>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
