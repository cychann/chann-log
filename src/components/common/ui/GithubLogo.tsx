"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function GithubLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link
      href="https://github.com/cychann"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md hover:bg-accent transition-colors"
    >
      <Image
        src={
          resolvedTheme === "dark"
            ? "/github-mark-white.png"
            : "/github-mark.svg"
        }
        alt="Github Logo"
        width={24}
        height={24}
        className="transition-opacity"
      />
    </Link>
  );
}
