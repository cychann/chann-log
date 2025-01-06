import CustomMDX from "@/components/mdx/CustomMDX";
import PostContent from "@/components/post/postDetail/PostContent";
import PostHeader from "@/components/post/postDetail/PostHeader";
import { getPostDetail } from "@/lib/post";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default async function page({ params }: Props) {
  const { category, slug } = await params;
  const post = await getPostDetail(category, decodeURIComponent(slug));

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
