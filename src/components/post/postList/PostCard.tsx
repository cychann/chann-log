import PostDateTimeInfo from "@/components/ui/PostDateTimeInfo";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const { url, thumbnail, title, description, date, tags, readingMinutes } =
    post;

  return (
    <Link href={url}>
      <li className="flex flex-col gap-3 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
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
        <div className="p-4 flex flex-col gap-2">
          <h2 className="font-bold text-xl text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <ul className="flex items-center gap-2 mt-2">
            {tags?.split(",").map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700"
              >
                {tag}
              </li>
            ))}
          </ul>
          <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
        </div>
      </li>
    </Link>
  );
}
