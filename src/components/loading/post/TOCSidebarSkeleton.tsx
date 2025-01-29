import { Skeleton } from "@/components/ui/skeleton";

export function TOCSidebarSkeleton() {
  return (
    <div className="hidden lg:block lg:absolute lg:-right-[280px] lg:top-0 lg:w-64">
      <div className="sticky top-20 space-y-2">
        <Skeleton className="h-6 w-24 mb-4" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
