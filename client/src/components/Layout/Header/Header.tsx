import { SidebarTrigger } from '@/components/tailgrids/core/sidebar';
import { AngleDoubleLeft } from '@tailgrids/icons';

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-base-200 bg-background-100 px-6">
      <SidebarTrigger>
        <AngleDoubleLeft className="group-data-[sidebar=closed]/sidebar-wrapper:rotate-180 duration-300" />
      </SidebarTrigger>
      <p className="text-lg font-semibold">Model optimizer</p>
    </header>
  );
}
