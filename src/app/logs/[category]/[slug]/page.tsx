import PostDetailPage from "@/components/post/PostDetailPage";
import { parseToc } from "@/lib/markdonw";
import { getLogDetail } from "@/lib/posts/log";
import { LogPost } from "@/types/post";
import { Metadata } from "next";

type LogDetailPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export async function generateMetadata({
  params: { category, slug },
}: LogDetailPageProps): Promise<Metadata> {
  const post = await getLogDetail(category, decodeURIComponent(slug));

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function logDetailpage({
  params: { category, slug },
}: LogDetailPageProps) {
  const post = await getLogDetail(category, decodeURIComponent(slug));
  const toc = await parseToc(post.content);

  return <PostDetailPage<LogPost> post={post} toc={toc} />;
}
