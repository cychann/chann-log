import { Skeleton } from "@/components/ui/skeleton";

export function LogLoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-4"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Skeleton className="w-5 h-5" />
              <Skeleton className="h-7 w-32" />
            </div>
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  );
}
