"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import KBarButton from "../KBar/KBarButton";
import NavLink from "./NavLink";
import { ThemeToggle } from "../common/ui/ThemeToggle";
import GithubLogo from "../common/ui/GithubLogo";

const NAV_LIST = [
  { name: "Articles", href: "/articles" },
  { name: "Logs", href: "/logs" },
];

export default function PostDetailHeader() {
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [postTitle, setPostTitle] = useState("");

  useEffect(() => {
    const titleElement = document.querySelector("#post-title");
    if (titleElement?.textContent) {
      setPostTitle(titleElement.textContent);
    }

    const handleScroll = () => {
      const titleElement = document.querySelector("#post-title");
      if (!titleElement) return;

      const titlePosition = titleElement.getBoundingClientRect().top;
      const headerHeight = 73;

      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;

      setIsScrolled(titlePosition < headerHeight);

      const currentProgress = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 bg-background z-10 border-b-[1px] shadow-sm">
      <nav className="max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center w-full">
          <Link href="/" className="shrink-0">
            <h3 className="text-3xl font-extrabold">chann-log</h3>
          </Link>

          <div className="flex-1 mx-8">
            <div className="relative h-8 overflow-hidden">
              <div
                className={`absolute w-full transition-transform duration-300 ease-in-out ${
                  isScrolled ? "-translate-y-full" : "translate-y-0"
                }`}
              >
                <div className="flex gap-4">
                  {NAV_LIST.map(({ name, href }) => (
                    <NavLink href={href} name={name} key={name} />
                  ))}
                </div>
              </div>

              <div
                className={`absolute w-full transition-transform duration-300 ease-in-out ${
                  isScrolled ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <p className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis text-primary">
                  {postTitle}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <KBarButton />
            <ThemeToggle />
            <GithubLogo />
          </div>
        </div>
      </nav>

      {/* 프로그레스 바 */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-200"
        style={{
          width: `${progress}%`,
          transform: "translateY(1px)",
        }}
      />
    </header>
  );
}
