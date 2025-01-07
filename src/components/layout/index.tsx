"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import NavLink from "@/components/layout/NavLink";
import IconButton from "@/components/common/IconButton";

const NAV_LIST = [
  { name: "Articles", href: "/articles" },
  { name: "Logs", href: "/logs" },
  { name: "Collections", href: "/collections" },
];

export default function Header() {
  return (
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
        <button className="bg-slate-200 hover:bg-slate-300 transition-all duration-100 rounded-lg w-44 px-1 py-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoIosSearch size={16} />
            <p className="text-sm text-slate-600">Search...</p>
          </div>
          <div className="bg-zinc-50 p-1 rounded-lg text-sm text-slate-600">
            Cmd+K
          </div>
        </button>

        <IconButton icon={<MdDarkMode size={24} />} />
        <IconButton icon={<FaGithub size={24} />} />
      </div>
    </nav>
  );
}
