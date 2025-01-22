import PostDateTimeInfo from "@/components/common/PostDateTimeInfo";
import Tags from "@/components/common/Tags";
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
      <li className="flex flex-col h-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video w-full rounded-t-md border-b">
          <Image
            src={thumbnail}
            alt={`thumbnail for ${title}`}
            sizes="(max-width: 1000px) 50vw, 450px"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="flex-1">
            <h2 className="font-bold text-xl text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="mt-auto pt-4 flex flex-col gap-3">
            <Tags tags={post.tags?.split(",") || []} />
            <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
          </div>
        </div>
      </li>
    </Link>
  );
}
