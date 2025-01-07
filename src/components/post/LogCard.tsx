import { Post } from "@/types/post";
import React from "react";
import Tags from "@/components/common/Tags";
import PostDateTimeInfo from "@/components/common/PostDateTimeInfo";
import Link from "next/link";

type LogCardProps = {
  post: Post;
};

export default function LogCard({ post }: LogCardProps) {
  const { title, tags, date, readingMinutes, url } = post;
  return (
    <Link href={url} className="cursor-pointer">
      <div
        key={title}
        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="mt-2">
          <Tags tags={tags?.split(",") || []} />
          <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
        </div>
      </div>
    </Link>
  );
}
