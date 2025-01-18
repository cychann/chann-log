"use client";

import { useKBar } from "kbar";
import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function KBarButton() {
  const { query } = useKBar();
  const handleClick = () => {
    if (query) {
      query.toggle();
    }
  };
  return (
    <button
      className="bg-slate-200 hover:bg-slate-300 transition-all duration-100 rounded-lg w-44 px-1 py-1 flex items-center justify-between"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <IoIosSearch size={16} />
        <p className="text-sm text-slate-600">Search...</p>
      </div>
      <div className="bg-zinc-50 p-1 rounded-lg text-sm text-slate-600">
        Cmd+K
      </div>
    </button>
  );
}
