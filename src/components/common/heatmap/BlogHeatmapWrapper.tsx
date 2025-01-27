import { getPostsByDate } from "@/lib/posts/utils";
import BlogHeatmap from "./BlogHeatmap";

export default async function BlogHeatmapWrapper() {
  const dateData = await getPostsByDate();

  return <BlogHeatmap dateData={dateData} />;
}
