import PostDetailPage from "@/components/post/PostDetailPage";
import { getLogDetail } from "@/lib/posts/log";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default async function logDetailpage({ params }: Props) {
  const { category, slug } = await params;
  const post = await getLogDetail(category, decodeURIComponent(slug));

  return <PostDetailPage post={post} />;
}
