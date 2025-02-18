"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type GithubLogoProps = {
  size?: number;
};

export default function GithubLogo({ size }: GithubLogoProps) {
  const logoSize = size || 24;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="rounded-md hover:bg-accent transition-colors ">
      <Image
        src={
          resolvedTheme === "dark"
            ? "/github-mark-white.png"
            : "/github-mark.svg"
        }
        alt="Github Logo"
        width={logoSize}
        height={logoSize}
        className="transition-opacity"
      />
    </div>
  );
}
