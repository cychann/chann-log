import PostDetailPage from "@/components/post/PostDetailPage";
import { getArticleDetail } from "@/lib/posts/article";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default async function articleDetailpage({
  params: { category, slug },
}: Props) {
  const post = await getArticleDetail(category, decodeURIComponent(slug));

  return <PostDetailPage post={post} />;
}
