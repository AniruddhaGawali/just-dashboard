import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import {
  BellIcon,
  ClockCounterClockwiseIcon,
  CommandIcon,
  SidebarIcon,
  StarIcon,
  SunIcon,
  MoonIcon,
} from "@phosphor-icons/react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

function Header() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="w-full h-16 bg-background border-b border-border flex items-center justify-between px-4">
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

      <div className="flex items-center">
        <div className="flex items-center justify-center bg-secondary px-2 py-1 rounded-md text-secondary-foreground/30 mr-2">
          <Search size={20} className="mr-1" />
          <input
            type="text"
            placeholder="Search"
            className="bg-secondary outline-none border-0 text-secondary-foreground shadow-none ring-0 focus:ring-0  text-sm  rounded-md placeholder:text-secondary-foreground/30"
          />
          <CommandIcon className=" text-lg" />/
        </div>

        <Button onClick={toggleTheme} variant="ghost" size="icon">
          {theme === "light" ? (
            <SunIcon className="text-lg" weight="duotone" />
          ) : (
            <MoonIcon className="text-lg" weight="duotone" />
          )}
        </Button>
        <Button variant="ghost" size="icon">
          <ClockCounterClockwiseIcon className="text-lg" weight="duotone" />
        </Button>
        <Button variant="ghost" size="icon">
          <BellIcon className="text-lg" weight="duotone" />
        </Button>
        <Button variant="ghost" size="icon">
          <SidebarIcon className="text-lg" weight="duotone" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
