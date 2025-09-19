"use client";

import { DashboardSidebar } from "@/components/common/DashboardSidebar";
import Header from "@/components/common/Header";
import ECommerce from "@/components/eCommerce";
import NotificationSection from "@/components/NotificationSection";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <main className="bg-background min-h-screen min-w-screen">
      <SidebarProvider>
        <div className="flex flex-row w-full h-full">
          <DashboardSidebar />

          <div className="flex-1 flex flex-col h-full">
            <Header />
            <ECommerce />
          </div>

          <NotificationSection />
        </div>
      </SidebarProvider>
    </main>
  );
}
