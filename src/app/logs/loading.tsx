import { LogLoadingSkeleton } from "@/components/loading/log/LogLoadingSkeleton";
import ListPageHeader from "@/components/pages/ListPageHeader";

export default function Loading() {
  return (
    <ListPageHeader
      title="Log"
      description="작은 배움과 경험들을 간단히 기록하는 공간입니다. 😊"
    >
      <LogLoadingSkeleton />
    </ListPageHeader>
  );
}
