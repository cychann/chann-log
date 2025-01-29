import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    <section className="flex justify-between items-center bg-background-secondary">
      <div className="space-y-3">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-5 w-48" />
      </div>
      <Skeleton className="h-28 w-28 rounded-full" />
    </section>
  );
}
