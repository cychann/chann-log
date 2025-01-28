import { Skeleton } from "@/components/ui/skeleton";

export function PostContentSkeleton() {
  return (
    <div className="prose max-w-none w-full mt-8 space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="space-y-3">
          <Skeleton className="h-6 w-48" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[95%]" />
          </div>
        </div>
      ))}
    </div>
  );
}
