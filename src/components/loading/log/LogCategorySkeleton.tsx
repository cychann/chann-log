import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import LogListSkeleton from "./LogListSkeleton";

export default function LogCategorySkeleton() {
  return (
    <section className="mx-auto mt-12 w-full max-w-[960px] px-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="w-9 h-9 rounded-lg" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <Skeleton className="w-96 h-6 mb-6" />
      </div>
      <LogListSkeleton />
    </section>
  );
}
