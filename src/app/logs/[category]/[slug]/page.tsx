import PostDetailPage from "@/components/post/PostDetailPage";
import { parseToc } from "@/lib/markdonw";
import { getLogDetail, getLogList } from "@/lib/posts/log";
import { LogPost } from "@/types/post";
import { Metadata } from "next";

type LogDetailPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: LogDetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

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

export async function generateStaticParams() {
  const logs = await getLogList();

  return logs.map((log) => ({
    category: log.category,
    slug: encodeURIComponent(log.slug),
  }));
}

export default async function logDetailpage({ params }: LogDetailPageProps) {
  const { category, slug } = await params;

  const post = await getLogDetail(category, decodeURIComponent(slug));
  const toc = await parseToc(post.content);

  return <PostDetailPage<LogPost> post={post} toc={toc} />;
}
