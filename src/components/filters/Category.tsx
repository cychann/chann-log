import Link from "next/link";
import React from "react";

type CategoryProps = {
  category: string;
  selected: boolean;
  postCount: number;
};

export default function Category({
  category,
  selected,
  postCount,
}: CategoryProps) {
  return (
    <Link href={`/articles/${category}`}>
      <li
        className={` flex items-center gap-1 cursor-pointer px-4 py-2 rounded hover:bg-button-active transition-all duration-200  ${
          selected ? "bg-foreground text-background" : "text-foreground"
        }`}
      >
        <p>{category}</p>
        <div>({postCount})</div>
      </li>
    </Link>
  );
}
