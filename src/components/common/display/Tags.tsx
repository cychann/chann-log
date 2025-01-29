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
          className="rounded-full bg-primary-100 px-3 py-1 text-xs text-primary-800 dark:bg-primary-800 dark:text-white"
        >
          {tag}
        </li>
      ))}
      {remainingCount > 0 && (
        <li className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          +{remainingCount}
        </li>
      )}
    </ul>
  );
}
