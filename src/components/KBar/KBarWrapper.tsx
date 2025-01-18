"use client";

import { ExtendedAction } from "@/types/Kbar";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  NO_GROUP,
  KBarResults,
} from "kbar";
import { useRouter } from "next/navigation";
import { SearchResult } from "./SearchResult";

interface KBarProviderProps {
  children: React.ReactNode;
  actions: ExtendedAction[];
}

export function KBarWrapper({ children, actions }: KBarProviderProps) {
  return (
    <KBarProvider actions={actions}>
      {children}
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/30" />
          <KBarAnimator className="w-full max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
            <KBarSearch
              className="w-full bg-transparent py-3 px-4 outline-none placeholder:text-gray-500 dark:text-white"
              placeholder="Type a command or search..."
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className="px-4 py-2 mb-2 text-xs font-medium text-gray-400 dark:text-gray-500">
              {item}
            </div>
          ) : (
            <SearchResult item={item as ExtendedAction} active={active} />
          )
        }
      />
    </div>
  );
}
