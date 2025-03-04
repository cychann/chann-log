"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type HeaderLogoProps = {
  onClick?: () => void;
  active?: boolean;
};

export default function HeaderLogo({ onClick, active }: HeaderLogoProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const LogoContent = (
    <div className="flex items-center gap-2">
      <Image src="/icon.png" alt="logo" width={32} height={32} />
      <span
        className={cn(
          "text-[14px] leading-none font-bold text-text-secondary",
          active && "text-primary"
        )}
      >
        CHANN.
        <br />
        DEV
      </span>
    </div>
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
