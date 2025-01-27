import React from "react";

type TagsProps = {
  tags: string[];
};

export default function Tags({ tags }: TagsProps) {
  return (
    <ul className="flex items-center gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
