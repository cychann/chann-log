"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import IconButton from "@/components/common/IconButton";
import KBarButton from "../KBar/KBarButton";
import NavLink from "./NavLink";

const NAV_LIST = [
  { name: "Articles", href: "/articles" },
  { name: "Logs", href: "/logs" },
];

export default function PostHeader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const currentProgress = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full sticky top-0 bg-white z-50 border-b-[1px] shadow-sm">
      <nav className="flex justify-between items-center max-w-6xl mx-auto py-4">
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
          <IconButton icon={<MdDarkMode size={24} />} />
          <IconButton icon={<FaGithub size={24} />} />
        </div>
      </nav>
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-200"
        style={{
          width: `${progress}%`,
          transform: "translateY(1px)",
        }}
      />
    </div>
  );
}
