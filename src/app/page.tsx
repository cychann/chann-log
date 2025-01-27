import BlogHeatmapWrapper from "@/components/common/heatmap/BlogHeatmapWrapper";
import Profile from "@/components/common/profile/Profile";
import RecentArticle from "@/components/article/RecentArticle";
import RecentLog from "@/components/log/RecentLog";

export default function Home() {
  return (
    <div className="mx-auto mt-12 w-full max-w-4xl px-4 flex flex-col gap-12">
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <BlogHeatmapWrapper />
      {/* @ts-expect-error Async Server Component */}
      <RecentArticle />
      {/* @ts-expect-error Async Server Component */}
      <RecentLog />
    </div>
  );
}
