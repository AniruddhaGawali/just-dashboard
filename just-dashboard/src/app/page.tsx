"use client";

import { DashboardSidebar } from "@/components/common/DashboardSidebar";
import Header from "@/components/common/Header";
import NotificationSection from "@/components/NotificationSection";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <main className="bg-background h-screen w-screen">
      <SidebarProvider>
        <DashboardSidebar />
        <Header />
        <NotificationSection />
      </SidebarProvider>
    </main>
  );
}
