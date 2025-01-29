import BlogHeatmapWrapper from "@/components/common/heatmap/BlogHeatmapWrapper";
import Profile from "@/components/common/profile/Profile";
import RecentArticle from "@/components/article/RecentArticle";
import RecentLog from "@/components/log/RecentLog";
import { Suspense } from "react";
import { ProfileSkeleton } from "@/components/loading/main/ProfileSkeleton";
import { HeatmapSkeleton } from "@/components/loading/main/HeatmapSkeleton";
import { RecentArticleSkeleton } from "@/components/loading/main/RecentArticleSkeleton";
import { RecentLogSkeleton } from "@/components/loading/main/RecentLogSkeleton";

export default function Home() {
  return (
    <div className="mx-auto mt-12 w-full max-w-4xl px-4 flex flex-col gap-12">
      <Profile />
      <Suspense fallback={<HeatmapSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <BlogHeatmapWrapper />
      </Suspense>
      <Suspense fallback={<RecentArticleSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecentArticle />
      </Suspense>
      <Suspense fallback={<RecentLogSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecentLog />
      </Suspense>
    </div>
  );
}
