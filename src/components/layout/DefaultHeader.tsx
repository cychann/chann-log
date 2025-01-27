"use client";

import Link from "next/link";
import NavLink from "@/components/layout/NavLink";
import KBarButton from "../KBar/KBarButton";
import { ThemeToggle } from "../common/ui/ThemeToggle";
import GithubLogo from "../common/ui/GithubLogo";

const NAV_LIST = [
  { name: "Articles", href: "/articles" },
  { name: "Logs", href: "/logs" },
];

export default function DefaultHeader() {
  return (
    <header className="w-full py-4 border-b-[1px] shadow-sm">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h3 className="text-3xl font-extrabold">chann-log</h3>
          </Link>
          {NAV_LIST.map(({ name, href }) => (
            <NavLink href={href} name={name} key={name} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <KBarButton />
          <ThemeToggle />
          <GithubLogo />
        </div>
      </nav>
    </header>
  );
}
