import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type CategoryProps = {
  category: string;
  selected: boolean;
  postCount: number;
  basePath: "articles" | "logs";
};

export default function Category({
  category,
  selected,
  postCount,
  basePath,
}: CategoryProps) {
  return (
    <Link href={`/${basePath}/${category}`}>
      <li
        className={cn(
          "flex items-center gap-1 cursor-pointer px-4 py-2 rounded-lg text-[13px] bg-background-button text-text-button font-semibold hover:bg-button-active transition-all duration-200",
          selected && "bg-primary text-white [&>*]:text-white"
        )}
      >
        <p>{category}</p>
        <div>({postCount})</div>
      </li>
    </Link>
  );
}
