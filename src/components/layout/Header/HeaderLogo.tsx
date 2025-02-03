"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import Link from "next/link";

type HeaderLogoProps = {
  onClick?: () => void;
  active?: boolean;
};

export default function HeaderLogo({ onClick, active }: HeaderLogoProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const LogoContent = (
    <h3 className={cn("text-3xl font-extrabold", active && "text-primary")}>
      chann-log
    </h3>
  );

  if (isDesktop) {
    return (
      <Link href="/" className="shrink-0">
        {LogoContent}
      </Link>
    );
  }

  return (
    <div className="shrink-0 cursor-pointer" onClick={onClick}>
      {LogoContent}
    </div>
  );
}
