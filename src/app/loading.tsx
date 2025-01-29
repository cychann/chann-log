import { HeatmapSkeleton } from "@/components/loading/main/HeatmapSkeleton";
import { ProfileSkeleton } from "@/components/loading/main/ProfileSkeleton";
import { RecentArticleSkeleton } from "@/components/loading/main/RecentArticleSkeleton";
import { RecentLogSkeleton } from "@/components/loading/main/RecentLogSkeleton";

export default function Loading() {
  return (
    <div className="mx-auto mt-12 w-full max-w-4xl px-4 flex flex-col gap-12">
      <ProfileSkeleton />
      <HeatmapSkeleton />
      <RecentArticleSkeleton />
      <RecentLogSkeleton />
    </div>
  );
}
