import React from "react";

type TagsProps = {
  tags: string[];
  maxDisplay?: number;
};

export default function Tags({ tags, maxDisplay = 3 }: TagsProps) {
  const displayTags = tags.slice(0, maxDisplay);
  const remainingCount = Math.max(0, tags.length - maxDisplay);

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
