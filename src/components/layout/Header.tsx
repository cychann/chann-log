"use client";

import React, { ReactNode, useState } from "react";
import { NAV_LIST } from "@/config/const";
import NavLink from "./Header/NavLink";
import HeaderLogo from "./Header/HeaderLogo";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import KBarButton from "../KBar/KBarButton";
import { ThemeToggle } from "../common/ui/ThemeToggle";
import GithubLogo from "../common/ui/GithubLogo";

type BaseHeaderProps = {
  navigationSlot?: ReactNode;
  children?: ReactNode;
};

export default function Header({ navigationSlot, children }: BaseHeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isVisible = useScrollDirection();

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
      <header
        className={cn(
          "w-full sticky top-0 bg-background z-20 border-b-[1px] shadow-sm",
          "transition-transform duration-300",
          !isVisible && "-translate-y-full"
        )}
      >
        <nav className="max-w-6xl mx-auto py-4 px-4">
          <div className="flex items-center w-full">
            <HeaderLogo onClick={handleLogoClick} active={isNavOpen} />
            <div className="hidden md:flex flex-1 mx-8">
              {navigationSlot || defaultNavigation}
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-2 shrink-0">
                <KBarButton />
                <ThemeToggle />
                <GithubLogo />
              </div>
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
