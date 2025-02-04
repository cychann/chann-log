import PostDetailPage from "@/components/post/PostDetailPage";
import { parseToc } from "@/lib/markdonw";
import { getArticleDetail } from "@/lib/posts/article";
import { Metadata } from "next";

type ArticleDetailPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export async function generateMetadata({
  params: { category, slug },
}: ArticleDetailPageProps): Promise<Metadata> {
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
  params: { category, slug },
}: ArticleDetailPageProps) {
  const post = await getArticleDetail(category, decodeURIComponent(slug));
  const toc = await parseToc(post.content);

  return (
    /* @ts-expect-error Async Server Component */
    <PostDetailPage post={post} toc={toc} />
  );
}
