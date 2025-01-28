import PostDetailSkeleton from "@/components/loading/post/PostDetailSkeleton";
import PostDetailPage from "@/components/post/PostDetailPage";
import { Suspense } from "react";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default function logDetailpage({ params: { category, slug } }: Props) {
  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <PostDetailPage category={category} slug={decodeURIComponent(slug)} />
    </Suspense>
  );
}
