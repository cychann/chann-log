import { Skeleton } from "@/components/ui/skeleton";
import { ArticleCardSkeleton } from "../article/ArticleCardSkeleton";

export function RecentArticleSkeleton() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-7 w-32" />
        <Skeleton className="h-5 w-16" />
      </div>
      <ul className="flex flex-col">
        {[...Array(3)].map((_, i) => (
          <li key={i}>
            <ArticleCardSkeleton />
          </li>
        ))}
      </ul>
    </section>
  );
}
