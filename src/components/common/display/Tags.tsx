import React from "react";

type TagsProps = {
  tags: string[];
  limit?: boolean;
};

export default function Tags({ tags, limit = false }: TagsProps) {
  const displayTags = limit ? tags.slice(0, 5) : tags;
  const remainingCount = limit ? Math.max(0, tags.length - 5) : 0;

  return (
    <ul className="flex items-center gap-2 flex-wrap">
      {displayTags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-background-button text-text-button font-semibold px-3 py-1 text-xs"
        >
          {tag}
        </li>
      ))}
      {remainingCount > 0 && (
        <li className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          +{remainingCount}
        </li>
      )}
    </ul>
  );
}
