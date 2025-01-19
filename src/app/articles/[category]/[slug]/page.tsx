import PostDetailPage from "@/components/post/PostDetailPage";
import { getArticleDetail } from "@/lib/posts/article";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default async function articleDetailpage({ params }: Props) {
  const { category, slug } = await params;
  const post = await getArticleDetail(category, decodeURIComponent(slug));

  return <PostDetailPage post={post} />;
}
