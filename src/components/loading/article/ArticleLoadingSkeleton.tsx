import { Skeleton } from "@/components/ui/skeleton";
import { ArticleCardSkeleton } from "./ArticleCardSkeleton";

export function ArticleLoadingSkeleton() {
  return (
    <section>
      <ul className="flex items-center gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <Skeleton className="px-4 py-2 rounded flex items-center w-24 h-9" />
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <ArticleCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
