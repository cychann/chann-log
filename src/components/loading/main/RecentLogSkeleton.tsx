import { Skeleton } from "@/components/ui/skeleton";
import LogCardSkeleton from "../log/LogCardSkeleton";

export function RecentLogSkeleton() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-7 w-32" />
        <Skeleton className="h-5 w-16" />
      </div>
      <ul className="flex flex-col">
        {[...Array(3)].map((_, i) => (
          <li key={i}>
            <LogCardSkeleton />
          </li>
        ))}
      </ul>
    </section>
  );
}
