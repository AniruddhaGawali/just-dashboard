import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import {
  BellIcon,
  ClockCounterClockwiseIcon,
  CommandIcon,
  MagnifyingGlassIcon,
  SidebarIcon,
  StarIcon,
  SunIcon,
} from "@phosphor-icons/react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger size={"lg"}>
          <SidebarIcon size={32} weight="duotone" />
        </SidebarTrigger>
        <StarIcon className="text-lg" weight="duotone" />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem className="text-foreground">
              <BreadcrumbLink href="/" className="text-foreground">
                Default
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center  bg-secondary px-4 py-2 rounded-md text-secondary-foreground/30">
          <Search size={20} className="mr-1" />
          <input
            type="text"
            placeholder="Search"
            className="bg-secondary outline-none border-0 text-secondary-foreground shadow-none ring-0 focus:ring-0  text-sm  rounded-md placeholder:text-secondary-foreground/30"
          />
          <CommandIcon className=" text-lg" />/
        </div>

        <SunIcon className="text-lg" weight="duotone" />
        <ClockCounterClockwiseIcon className="text-lg" weight="duotone" />
        <BellIcon className="text-lg" weight="duotone" />
        <SidebarIcon className="text-lg" weight="duotone" />
      </div>
    </header>
  );
}

export default Header;
