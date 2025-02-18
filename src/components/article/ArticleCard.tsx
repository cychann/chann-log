import { ArticlePreview } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tags from "../common/display/Tags";
import PostDateTimeInfo from "../common/display/PostDateTimeInfo";

type ArticleCardProps = {
  post: ArticlePreview;
};

export default function ArticleCard({ post }: ArticleCardProps) {
  const { url, thumbnail, title, description, date, tags, readingMinutes } =
    post;

  return (
    <Link href={url} className="flex justify-between py-6 group">
      <div className="flex flex-col max-w-[calc(100%-144px)]">
        <span className="text-[20px] font-bold mb-[6px] overflow-hidden text-ellipsis group-hover:text-primary-600 transition-colors">
          {title}
        </span>
        <span className="text-[15px] text-text-description">{description}</span>
        <div className="mt-auto pt-4 flex flex-col gap-[15px]">
          <Tags tags={tags?.split(",") || []} limit />
          <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
        </div>
      </div>
      <div className="relative w-32 h-24 rounded-md overflow-hidden self-start">
        <Image
          src={thumbnail}
          alt={`thumbnail for ${title}`}
          className="object-cover rounded-md transition-transform duration-300 group-hover:scale-125"
          sizes="130px"
          fill
        />
      </div>
    </Link>
  );
}
