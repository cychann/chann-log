import PostContent from "@/components/post/PostContent";
import PostHeader from "@/components/post/PostHeader";
import { getArticleDetail } from "@/lib/posts/article";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default async function page({ params }: Props) {
  const { category, slug } = await params;
  const post = await getArticleDetail(category, decodeURIComponent(slug));

  return (
    <section className="mx-auto w-full max-w-[750px] my-5">
      <PostHeader
        title={post.title}
        date={post.date}
        category={post.category}
        readingMinutes={post.readingMinutes}
      />
      <PostContent content={post.content} />
    </section>
  );
}
