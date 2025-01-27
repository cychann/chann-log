import PostDateTimeInfo from "@/components/common/display/PostDateTimeInfo";
import Tags from "@/components/common/display/Tags";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function ArticleCard({ post }: Props) {
  const { url, thumbnail, title, description, date, tags, readingMinutes } =
    post;

  return (
    <Link href={url}>
      <div
        className="flex flex-col h-full rounded-lg border border-border bg-background-secondary 
shadow-md hover:shadow-xl dark:hover:shadow-none dark:hover:border-primary-400 
transition-all duration-200"
      >
        <div className="relative aspect-video w-full rounded-t-md ">
          <Image
            src={thumbnail}
            alt={`thumbnail for ${title}`}
            sizes="(max-width: 1000px) 50vw, 450px"
            fill
            priority
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="flex-1">
            <h2 className="font-bold text-xl text-text-primary mb-2">
              {title}
            </h2>
            <p className="text-text-secondary">{description}</p>
          </div>
          <div className="mt-auto pt-4 flex flex-col gap-3">
            <Tags tags={post.tags?.split(",") || []} />
            <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
          </div>
        </div>
      </div>
    </Link>
  );
}
