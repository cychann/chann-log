"use client";

import { useHeadingsObserver } from "@/hooks/useHeadingsObserver";
import { HeadingItem } from "@/types/post";
import Link from "next/link";

interface TOCSidebarProps {
  toc: HeadingItem[];
}

export default function TOCSidebar({ toc }: TOCSidebarProps) {
  const activeIdList = useHeadingsObserver("h1, h2");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToComments = () => {
    const commentsSection = document.getElementById("comments");
    commentsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const copyCurrentLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <aside className="not-prose absolute left-full top-0 hidden h-full xl:block">
      <div className="sticky top-12 ml-8 w-[240px]">
        <nav
          className="mb-4 rounded-lg border bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm"
          aria-label="Table of contents"
        >
          <h2 className="mb-3 font-bold text-gray-900">On this page</h2>
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
                    ${isActive ? "bg-blue-50/50" : "hover:bg-gray-50"}
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
                          ? "font-medium text-primary pl-3"
                          : "text-gray-500 hover:text-primary"
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
        <div className="flex items-center justify-between rounded-lg border bg-white/50 px-6 py-3 shadow-sm backdrop-blur-sm">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary"
            aria-label="Scroll to top"
          >
            <span>Top</span>
          </button>
          <button
            onClick={scrollToComments}
            className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary"
            aria-label="Scroll to comments"
          >
            <span>Comments</span>
          </button>
          <button
            onClick={copyCurrentLink}
            className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary"
            aria-label="Copy page link"
          >
            <span>Share</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
