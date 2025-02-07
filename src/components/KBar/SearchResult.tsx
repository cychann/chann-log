"use client";

import { ExtendedAction } from "@/types/Kbar";
import { useKBar } from "kbar";
import { useRouter } from "next/navigation";

type SearchResultProps = {
  item: ExtendedAction;
  active: boolean;
};

export function SearchResult({ item, active }: SearchResultProps) {
  const router = useRouter();
  const { query } = useKBar();

  const handleClick = () => {
    if (item.metadata?.path) {
      router.push(item.metadata.path);
      query.toggle();
    }
  };

  return (
    <div
      className={`mx-2 px-3 py-1 flex items-center justify-between rounded-md cursor-pointer transition-colors duration-200 ${
        active
          ? "bg-gray-100 dark:bg-gray-800"
          : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className="text-sm font-medium dark:text-white truncate">
          {item.name}
        </span>
        {item.subtitle && (
          <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {item.subtitle}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
        {item.metadata?.category && (
          <span
            className={`text-xs rounded-md px-2 py-0.5 ${
              active
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                : "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
            }`}
          >
            {item.metadata.category}
          </span>
        )}
      </div>
    </div>
  );
}
