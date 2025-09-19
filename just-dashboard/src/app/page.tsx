"use client";

import { DashboardSidebar } from "@/components/common/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="bg-background h-screen w-screen">
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarTrigger>
          <SidebarIcon size={32} weight="duotone" />
        </SidebarTrigger>
      </SidebarProvider>
    </main>
  );
}
