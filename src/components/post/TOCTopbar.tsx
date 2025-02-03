"use client";

import { cn } from "@/lib/utils";
import { HeadingItem } from "@/types/post";
import { ArrowRight } from "lucide-react";

type TOCTopbarProps = {
  toc: HeadingItem[];
};

export default function TOCTopbar({ toc }: TOCTopbarProps) {
  if (toc.length === 0) return null;

  return (
    <nav className="xl:hidden">
      <div className="rounded-lg border bg-background/50 p-4 shadow-sm backdrop-blur-sm">
        <h2 className="mb-3 font-bold text-text-primary border-b py-2">목차</h2>
        <ul className="space-y-1 text-sm mb-4">
          {toc.map((item) => {
            return (
              <li
                key={item.link}
                style={{
                  paddingLeft: `${(item.indent - 1) * 0.75}rem`,
                }}
                className={cn(
                  "relative text-text-secondary hover:text-primary transition-colors duration-200"
                )}
              >
                <a
                  href={item.link}
                  className="group flex items-center justify-between py-1.5"
                >
                  <span className="font-medium">{item.text}</span>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
