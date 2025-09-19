import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function DashboardSidebar() {
  const dashboardMenus: MenuItem[] = [
    {
      label: "Dashboard",
      subLabels: [
        {
          label: "Overview",
        },
        {
          label: "eCommerce",
        },
        {
          label: "Projects",
        },
        { label: "Online Courses" },
      ],
    },

    {
      label: "Pages",
      subLabels: [
        {
          label: "User Profile",
          subLabels: [
            { label: "Overview" },
            { label: "Projects" },
            { label: "Campaigns" },
            { label: "Documents" },
            { label: "Followers" },
          ],
        },
        { label: "Settings" },
      ],
    },
  ];

  return (
    <Sidebar>
      <div className="p-4 bg-background h-full flex flex-col">
        <SidebarHeader className="flex flex-row items-center ">
          <Avatar>
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              AG
            </AvatarFallback>
          </Avatar>
          <span>Aniruddha Gawali</span>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              <SidebarMenu className="flex-row text-base gap-8">
                <SidebarMenuItem>Favorites</SidebarMenuItem>
                <SidebarMenuItem>Recently</SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col px-4 pt-2 gap-2">
                <SidebarMenuItem>Overview</SidebarMenuItem>
                <SidebarMenuItem>Projects</SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {dashboardMenus.map((menu) => (
            <SidebarGroup>
              <SidebarGroupLabel className="text-base">
                {menu.label}
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu className="flex flex-col px-4 pt-2 gap-2">
                  {menu.subLabels?.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      {item.label}

                      <Collapsible
                        defaultOpen
                        className="group/collapsible"
                      ></Collapsible>

                      {item.subLabels && (
                        <SidebarMenuSubItem className="flex flex-col px-4 pt-2 gap-2">
                          {item.subLabels.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.label}>
                              {subItem.label}
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSubItem>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        {/* <SidebarGroup>
            <SidebarGroupLabel className="text-base">
              Dashboard
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col px-4 pt-2 gap-2">
                {dashboardMenu.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    {item.label}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup> */}

        <SidebarFooter />
      </div>
    </Sidebar>
  );
}
