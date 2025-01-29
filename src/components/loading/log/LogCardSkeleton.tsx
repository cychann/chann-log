import { Skeleton } from "@/components/ui/skeleton";

export default function LogCardSkeleton() {
  return (
    <div className="flex flex-col p-4 h-full rounded-lg border border-border bg-background-secondary">
      <div className="flex-1">
        <Skeleton className="h-6 w-3/4" />
      </div>
      <div className="mt-auto pt-4 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
}
