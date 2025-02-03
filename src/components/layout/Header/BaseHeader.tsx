import React from "react";
import { NAV_LIST } from "@/config/const";
import NavLink from "./NavLink";
import HeaderLogo from "./HeaderLogo";
import HeaderActions from "./HeaderActions";

interface BaseHeaderProps {
  navigationSlot?: React.ReactNode;
  children?: React.ReactNode;
}

export default function BaseHeader({
  navigationSlot,
  children,
}: BaseHeaderProps) {
  const defaultNavigation = (
    <div className="flex gap-4">
      {NAV_LIST.map(({ name, href }) => (
        <NavLink href={href} name={name} key={name} />
      ))}
    </div>
  );

  return (
    <header className="w-full sticky top-0 bg-background z-10 border-b-[1px] shadow-sm">
      <nav className="max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center w-full">
          <HeaderLogo />
          <div className="flex-1 mx-8">
            {navigationSlot || defaultNavigation}
          </div>
          <HeaderActions />
        </div>
      </nav>
      {children}
    </header>
  );
}
