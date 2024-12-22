"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  name: string;
};

export default function NavLink({ href, name }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} key={name}>
      <p
        className={`px-2 py-1 font-semibold text-slate-500 hover:text-slate-900 transition-colors duration-200 ${
          isActive && "text-slate-900 bg-slate-100 rounded-lg"
        }`}
      >
        {name}
      </p>
    </Link>
  );
}
