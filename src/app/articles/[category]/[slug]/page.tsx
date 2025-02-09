import PostDetailPage from "@/components/post/PostDetailPage";
import { parseToc } from "@/lib/markdonw";
import { getArticleDetail } from "@/lib/posts/article";
import { ArticlePost } from "@/types/post";
import { Metadata } from "next";

type ArticleDetailPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const post = await getArticleDetail(category, decodeURIComponent(slug));

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

export default async function articleDetailpage({
  params,
}: ArticleDetailPageProps) {
  const { category, slug } = await params;

  const post = await getArticleDetail(category, decodeURIComponent(slug));
  const toc = await parseToc(post.content);

  return <PostDetailPage<ArticlePost> post={post} toc={toc} />;
}
