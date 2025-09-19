"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRight } from "lucide-react";
import {
  BookOpenIcon,
  ChartPieSliceIcon,
  ChatsCircleIcon,
  FolderIcon,
  NotebookIcon,
  ShoppingBagOpenIcon,
  UserGearIcon,
  UserRectangleIcon,
  UsersFourIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";

export function DashboardSidebar() {
  const dashboardMenus: MenuItem[] = [
    {
      label: "Dashboard",
      subLabels: [
        {
          label: "Default",
          icon: () => <ChartPieSliceIcon weight="duotone" />,
        },
        {
          label: "eCommerce",
          icon: () => <ShoppingBagOpenIcon weight="duotone" />,
          subLabels: [
            { label: "Analytics" },
            { label: "Orders" },
            { label: "Products" },
            { label: "Customers" },
            { label: "Reports" },
          ],
        },
        {
          label: "Projects",
          icon: () => <FolderIcon weight="duotone" />,
          subLabels: [
            { label: "Overview" },
            { label: "Team Members" },
            { label: "Tasks" },
            { label: "Milestones" },
            { label: "Files" },
            { label: "Activity" },
          ],
        },
        {
          label: "Online Courses",
          icon: () => <BookOpenIcon weight="duotone" />,
          subLabels: [
            { label: "Design" },
            { label: "Marketing" },
            { label: "Photography" },
          ],
        },
      ],
    },

    {
      label: "Pages",
      subLabels: [
        {
          label: "User Profile",
          icon: () => <UserRectangleIcon weight="duotone" />,
          subLabels: [
            { label: "Overview" },
            { label: "Projects" },
            { label: "Campaigns" },
            { label: "Documents" },
            { label: "Followers" },
          ],
        },
        {
          label: "Account",
          icon: () => <UserGearIcon weight="duotone" />,
          subLabels: [
            { label: "Settings" },
            { label: "Billing" },
            { label: "Notifications" },
            { label: "Security" },
            { label: "Activity Log" },
          ],
        },
        {
          label: "Corporate",
          icon: () => <UsersThreeIcon weight="duotone" />,
          subLabels: [
            { label: "About Us" },
            { label: "Careers" },
            { label: "Investor" },
            { label: "Sustainability" },
          ],
        },

        {
          label: "Blog",
          icon: () => <NotebookIcon weight="duotone" />,
          subLabels: [
            { label: "Latest Posts" },
            { label: "Categories" },
            { label: "Tags" },
            { label: "Archives" },
            { label: "Authors" },
          ],
        },

        {
          label: "Social",
          icon: () => <ChatsCircleIcon weight="duotone" />,
          subLabels: [
            { label: "GitHub" },
            { label: "Twitter" },
            { label: "LinkedIn" },
            { label: "Instagram" },
            { label: "Pinterest" },
          ],
        },
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
            <SidebarGroup key={menu.label}>
              <SidebarGroupLabel className="text-base">
                {menu.label}
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu className="flex flex-col px-4 pt-2">
                  {menu.subLabels?.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      {!item.subLabels ? (
                        <SidebarMenuButton className="px-7">
                          {typeof item.icon === "function" && item.icon()}
                          <span className="truncate">{item.label}</span>
                        </SidebarMenuButton>
                      ) : (
                        <Collapsible className="group/collapsible">
                          <CollapsibleTrigger className="w-full flex gap-2 group items-center justify-center">
                            <ChevronRight
                              className="transition-transform  group-data-[state=open]/collapsible:rotate-90"
                              size={16}
                            />
                            <SidebarMenuButton>
                              {typeof item.icon === "function" && item.icon()}
                              {item.label}
                            </SidebarMenuButton>
                          </CollapsibleTrigger>

                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.subLabels.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.label}>
                                  <SidebarMenuSubButton>
                                    {subItem.label}
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter />
      </div>
    </Sidebar>
  );
}
