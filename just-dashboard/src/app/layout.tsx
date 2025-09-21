'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/common/DashboardSidebar';
import Header from '@/components/common/Header';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import './globals.css';
import { useRef, useState } from 'react';
import { ImperativePanelHandle } from 'react-resizable-panels';
import RightSection from '@/components/common/RightSection';
import ReduxProvider from '@/provider/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} @container`}>
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
                  <ResizablePanelGroup
                    direction='horizontal'
                    className='h-full'
                  >
                    <ResizablePanel
                      defaultSize={75}
                      className='flex h-screen flex-col'
                    >
                      {/* The Header is now in the root layout */}
                      <Header onToggleRightSection={onToggleRightSection} />
                      <div className='flex-1 overflow-y-auto'>
                        {/* The 'children' prop renders the current page */}
                        {children}
                      </div>
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
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
