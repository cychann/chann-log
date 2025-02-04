import PostDetailPage from "@/components/post/PostDetailPage";
import { parseToc } from "@/lib/markdonw";
import { getArticleDetail } from "@/lib/posts/article";
import { getLogDetail } from "@/lib/posts/log";
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

  const imageURL = `/${post.thumbnail}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [imageURL],
    },
  };
}

export default async function logDetailpage({
  params: { category, slug },
}: LogDetailPageProps) {
  const post = await getLogDetail(category, decodeURIComponent(slug));
  const toc = await parseToc(post.content);

  return (
    /* @ts-expect-error Async Server Component */
    <PostDetailPage post={post} toc={toc} />
  );
}
