"use client";

import { useKBar } from "kbar";
import { Search } from "lucide-react";

export default function KBarButton() {
  const { query } = useKBar();
  const handleClick = () => {
    if (query) {
      query.toggle();
    }
  };

  return (
    <button
      className="bg-search-active hover:bg-search-hover 
        transition-all duration-100 rounded-lg w-44 px-2 py-1.5 
        flex items-center justify-between"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <Search size={16} className="text-text-tertiary" />
        <p className="text-sm text-text-tertiary">Search...</p>
      </div>
      <div className="bg-background px-1.5 py-0.5 rounded-md text-xs text-text-tertiary">
        ⌘K
      </div>
    </button>
  );
}
