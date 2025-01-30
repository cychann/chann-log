import React from "react";
import GithubLogo from "../common/ui/GithubLogo";
import { House } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center print:hidden">
      <div className="flex justify-center gap-4">
        <GithubLogo />
        <Link href="https://www.linkedin.com/in/dohkim777" target="_blank">
          <House className="transition" height={30} width={30} />
        </Link>
      </div>
      <div>
        © 2025. <span className="font-semibold">최유찬</span> All right
        reserved.
      </div>
    </footer>
  );
}
