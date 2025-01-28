import { ArticleLoadingSkeleton } from "@/components/loading/article/ArticleLoadingSkeleton";
import ListPageHeader from "@/components/pages/ListPageHeader";

export default function Loading() {
  return (
    <ListPageHeader
      title="Article"
      description="깊이 있는 고민과 배움을 담아낸 개발 여정의 기록입니다. 🚀"
    >
      <ArticleLoadingSkeleton />
    </ListPageHeader>
  );
}
