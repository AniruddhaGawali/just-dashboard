'use client';

import { DashboardSidebar } from '@/components/common/DashboardSidebar';
import Header from '@/components/common/Header';
import RightSection from '@/components/common/RightSection';
import { SidebarProvider } from '@/components/ui/sidebar';

import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useRef, useState } from 'react';
import { ImperativePanelHandle } from 'react-resizable-panels';

type Props = {
  children: React.ReactNode;
};

function DashbaordLayout({ children }: Props) {
  const [isRightSectionOpen, setRightSectionOpen] = useState(false);
  const rightSectionRef = useRef<ImperativePanelHandle>(null);

  const onToggleRightSection = () => {
    if (isRightSectionOpen) {
      rightSectionRef.current?.collapse();
      setRightSectionOpen(false);
    } else {
      rightSectionRef.current?.expand();
      setRightSectionOpen(true);
    }
  };
  return (
    <main className='bg-background h-screen min-w-screen'>
      <SidebarProvider>
        <div className='flex h-screen w-full flex-row'>
          <DashboardSidebar />

          <ResizablePanelGroup direction='horizontal' className='h-full'>
            <ResizablePanel defaultSize={20} className='scollbe h-screen'>
              <Header onToggleRightSection={onToggleRightSection} />
              {children}
            </ResizablePanel>

            <ResizablePanel
              ref={rightSectionRef}
              maxSize={25}
              collapsible={true}
              collapsedSize={0}
              onCollapse={() => setRightSectionOpen(false)}
              onExpand={() => setRightSectionOpen(true)}
              className='transition-all duration-300 ease-in-out'
            >
              <RightSection />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </SidebarProvider>
    </main>
  );
}

export default DashbaordLayout;
