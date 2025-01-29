import { Skeleton } from "@/components/ui/skeleton";

export function HeatmapSkeleton() {
  return (
    <section className="bg-background-secondary rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>
      <Skeleton className="h-[156px] w-full" />
      <div className="flex items-center justify-end gap-3 mt-6">
        <Skeleton className="h-4 w-8" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-3 h-3 rounded-sm" />
          ))}
        </div>
        <Skeleton className="h-4 w-8" />
      </div>
    </section>
  );
}
