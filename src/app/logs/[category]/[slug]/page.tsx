import PostDetailPage from "@/components/post/PostDetailPage";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default function logDetailpage({ params: { category, slug } }: Props) {
  return (
    /* @ts-expect-error Async Server Component */
    <PostDetailPage
      category={category}
      slug={decodeURIComponent(slug)}
      type="logs"
    />
  );
}
