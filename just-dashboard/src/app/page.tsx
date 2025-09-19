import { DashboardSidebar } from "@/components/common/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <main>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarTrigger />
      </SidebarProvider>
    </main>
  );
}
