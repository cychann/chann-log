"use client";

import { NAV_LIST } from "@/config/const";
import { usePostScroll } from "@/hooks/usePostScroll";
import NavLink from "./NavLink";
import BaseHeader from "./BaseHeader";

export default function PostDetailHeader() {
  const { progress, isScrolled, postTitle } = usePostScroll();

  const navigationWithTitle = (
    <div className="relative h-8 overflow-hidden">
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? "opacity-0 transform -translate-y-full"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        <div className="flex gap-4">
          {NAV_LIST.map(({ name, href }) => (
            <NavLink href={href} name={name} key={name} />
          ))}
        </div>
      </div>

      {/* Post Title */}
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isScrolled ? "opacity-100 -translate-y-7" : "opacity-0 translate-y-2"
        }`}
      >
        <p className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-primary">
          {postTitle}
        </p>
      </div>
    </div>
  );

  return (
    <BaseHeader navigationSlot={navigationWithTitle}>
      <div
        className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-200"
        style={{
          width: `${progress}%`,
          transform: "translateY(1px)",
        }}
      />
    </BaseHeader>
  );
}
