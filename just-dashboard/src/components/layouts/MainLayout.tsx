'use client';

import React, { useRef, useState } from 'react';
import RightSection from '@/components/common/RightSection';
import ReduxProvider from '@/provider/ReduxProvider';
import { ThemeProvider } from 'next-themes';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/common/DashboardSidebar';
import Header from '@/components/common/Header';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import { useWindowSize } from '@/hooks/useWindowSize';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ImperativePanelHandle } from 'react-resizable-panels';

function MainLayout({ children }: { children: React.ReactNode }) {
  const [isRightSectionOpen, setRightSectionOpen] = useState(false);
  const rightSectionRef = useRef<ImperativePanelHandle>(null);
  const { width } = useWindowSize();

  const shouldSheetOpen = width ? width < 1024 : false;

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
    <ReduxProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <main className='bg-background h-screen w-screen overflow-hidden'>
          <SidebarProvider>
            <div className='flex h-screen w-full flex-row'>
              <DashboardSidebar />
              <ResizablePanelGroup direction='horizontal' className='h-full'>
                <ResizablePanel
                  defaultSize={75}
                  className='flex h-screen flex-col'
                >
                  <Header onToggleRightSection={onToggleRightSection} />
                  <div className='flex-1 overflow-y-auto'>{children}</div>
                </ResizablePanel>
                {!shouldSheetOpen && (
                  <ResizablePanel
                    ref={rightSectionRef}
                    maxSize={25}
                    collapsible={true}
                    collapsedSize={0}
                    onCollapse={() => setRightSectionOpen(false)}
                    onExpand={() => setRightSectionOpen(true)}
                    className='hidden transition-all duration-300 ease-in-out lg:flex'
                  >
                    <RightSection />
                  </ResizablePanel>
                )}

                {shouldSheetOpen && (
                  <Sheet
                    onOpenChange={onToggleRightSection}
                    defaultOpen={false}
                    modal={true}
                    open={isRightSectionOpen}
                  >
                    <SheetContent className='w-[400px] sm:w-[540px]'>
                      <RightSection />
                    </SheetContent>
                  </Sheet>
                )}
              </ResizablePanelGroup>
            </div>
          </SidebarProvider>
        </main>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MainLayout;
