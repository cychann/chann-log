import { Mail } from "lucide-react";
import React from "react";
import GithubLogo from "../ui/GithubLogo";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="mailto:cychann@gmail.com"
        className="inline-flex items-center gap-1 hover:text-text-primary transition-colors"
      >
        <Mail size={13} />
        <span className="text-[13px] leading-none mt-[1.5px]">Mail</span>
      </Link>
      <Link
        href="https://github.com/cychann"
        target="_blank"
        className="inline-flex items-center gap-1 hover:text-text-primary transition-colors"
      >
        <GithubLogo size={13} />
        <span className="text-[13px] leading-none mt-[1.5px]">GitHub</span>
      </Link>
    </div>
  );
}
