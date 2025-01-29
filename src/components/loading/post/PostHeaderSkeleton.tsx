import { Skeleton } from "@/components/ui/skeleton";

export function PostHeaderSkeleton() {
  return (
    <section className="flex flex-col items-center gap-2 mt-14 pb-4 border-b">
      <Skeleton className="h-8 w-[480px]" />
      <Skeleton className="h-6 w-24" />
      <div className="flex items-center justify-center gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-20" />
      </div>
    </section>
  );
}
