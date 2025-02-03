"use client";

import React, { useState } from "react";
import { NAV_LIST } from "@/config/const";
import NavLink from "./NavLink";
import HeaderLogo from "./HeaderLogo";
import HeaderActions from "./HeaderActions";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface BaseHeaderProps {
  navigationSlot?: React.ReactNode;
  children?: React.ReactNode;
}

export default function BaseHeader({
  navigationSlot,
  children,
}: BaseHeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleLogoClick = () => {
    if (!isDesktop) {
      if (isNavOpen) {
        setIsNavOpen(false);
        document.documentElement.classList.remove("overflow-hidden");
        document.documentElement.classList.add("overflow-y-scroll");
      } else {
        setIsNavOpen(true);
        document.documentElement.classList.remove("overflow-y-scroll");
        document.documentElement.classList.add("overflow-hidden");
      }
    }
  };

  const defaultNavigation = (
    <div className="flex gap-4">
      {NAV_LIST.map(({ name, href }) => (
        <NavLink href={href} name={name} key={name} />
      ))}
    </div>
  );

  return (
    <>
      <header className="w-full sticky top-0 bg-background z-20 border-b-[1px] shadow-sm">
        <nav className="max-w-6xl mx-auto py-4 px-4">
          <div className="flex items-center w-full">
            <HeaderLogo onClick={handleLogoClick} active={isNavOpen} />
            <div className="hidden md:flex flex-1 mx-8">
              {navigationSlot || defaultNavigation}
            </div>
            <div className="ml-auto">
              <HeaderActions />
            </div>
          </div>
        </nav>
        {children}
      </header>

      <div
        className={cn(
          "fixed inset-x-0 top-[73px] bottom-0 bg-background z-10",
          "transition-transform duration-300 ease-in-out md:hidden",
          isNavOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="p-8">
          <div className="flex flex-col items-center gap-8 text-xl">
            {NAV_LIST.map(({ name, href }) => (
              <NavLink
                href={href}
                name={name}
                key={name}
                onClick={() => setIsNavOpen(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
