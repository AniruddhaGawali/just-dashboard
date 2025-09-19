import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { SidebarIcon } from "@phosphor-icons/react";

function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-border flex items-center justify-between px-4">
      <SidebarTrigger>
        <SidebarIcon size={32} weight="duotone" />
      </SidebarTrigger>
    </header>
  );
}

export default Header;
