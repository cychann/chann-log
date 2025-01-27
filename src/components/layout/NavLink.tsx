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
        className={`
          px-2 py-1 font-semibold rounded-lg
          ${
            isActive
              ? "text-text-primary bg-button-active"
              : "text-text-tertiary hover:text-text-primary hover:bg-button-hover"
          }
          transition-colors duration-200
        `}
      >
        {name}
      </p>
    </Link>
  );
}
