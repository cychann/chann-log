import BlogHeatmapWrapper from "@/components/common/heatmap/BlogHeatmapWrapper";
import Profile from "@/components/common/profile/Profile";
import RecentArticle from "@/components/articles/RecentArticle";
import RecentLog from "@/components/logs/RecentLog";

export default function Home() {
  return (
    <div className="mx-auto mt-12 w-full max-w-4xl px-4 flex flex-col gap-12">
      <Profile />
      <BlogHeatmapWrapper />
      <RecentArticle />
      <RecentLog />
    </div>
  );
}
