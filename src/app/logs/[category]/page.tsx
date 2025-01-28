import LogCategorySkeleton from "@/components/loading/log/LogCategorySkeleton";
import LogCategoryContent from "@/components/pages/log/LogCategoryContent";
import { Suspense } from "react";

interface Props {
  params: {
    category: string;
  };
}

export default function page({ params }: Props) {
  const { category } = params;

  return (
    <Suspense fallback={<LogCategorySkeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <LogCategoryContent category={category} />
    </Suspense>
  );
}
