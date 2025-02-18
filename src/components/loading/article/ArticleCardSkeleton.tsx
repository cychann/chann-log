import { Skeleton } from "@/components/ui/skeleton";

export function ArticleCardSkeleton() {
  return (
    <div className="flex justify-between py-6">
      <div className="flex flex-col max-w-[calc(100%-144px)]">
        <Skeleton className="h-[20px] w-3/4 mb-[6px]" />
        <div className="space-y-2">
          <Skeleton className="h-[15px] w-full" />
          <Skeleton className="h-[15px] w-4/5" />
        </div>

        <div className="mt-auto pt-4 flex flex-col gap-[15px]">
          <div className="flex gap-2">
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

      <div className="relative w-32 h-24 self-start">
        <Skeleton className="w-full h-full rounded-md" />
      </div>
    </div>
  );
}
