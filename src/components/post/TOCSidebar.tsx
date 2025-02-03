"use client";

import { useHeadingsObserver } from "@/hooks/useHeadingsObserver";
import { HeadingItem } from "@/types/post";
import { ChevronUp, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";

type TOCSidebarProps = {
  toc: HeadingItem[];
};

export default function TOCSidebar({ toc }: TOCSidebarProps) {
  const activeIdList = useHeadingsObserver("h1, h2");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToComments = () => {
    document.querySelector(".giscus")?.scrollIntoView();
  };

  const copyCurrentLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <aside className="absolute left-full top-0 hidden h-full xl:block">
      <div className="sticky top-[6rem] ml-8 w-[240px]">
        <nav
          className="mb-4 rounded-lg border bg-background/50 px-4 py-3 shadow-sm backdrop-blur-sm"
          aria-label="Table of contents"
        >
          <h2 className="mb-3 font-bold text-text-primary">On this page</h2>
          <ul className="space-y-1 text-sm">
            {toc.map((item) => {
              const isActive = activeIdList.includes(item.link);
              return (
                <li
                  key={item.link}
                  style={{
                    paddingLeft: `${item.indent * 0.75}rem`,
                  }}
                  className={`
                    relative transition-colors duration-200
                    rounded-md
                  `}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-md bg-primary" />
                  )}
                  <Link
                    href={item.link}
                    className={`
                      block p-1
                      text-sm transition-colors duration-200
                      ${
                        isActive
                          ? "font-medium text-primary"
                          : "text-text-tertiary hover:text-primary"
                      }
                    `}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-between rounded-lg border bg-background px-6 py-3 shadow-sm backdrop-blur-sm">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-primary"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4" />
            <span>Top</span>
          </button>
          <button
            onClick={scrollToComments}
            className="group flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-primary"
            aria-label="Scroll to comments"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Comments</span>
          </button>
          <button
            onClick={copyCurrentLink}
            className="group flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-primary"
            aria-label="Copy page link"
          >
            <Share2 className="h-4 w-4" />

            <span>Share</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
