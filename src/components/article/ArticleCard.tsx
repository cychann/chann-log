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
    <Link
      href={url}
      className="flex flex-row justify-between py-5 sm:py-6 group"
    >
      <div className="flex flex-col pr-3 max-w-[calc(100%-100px)] sm:max-w-[calc(100%-144px)]">
        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-bold mb-[6px] overflow-hidden text-ellipsis group-hover:text-primary-600 transition-colors line-clamp-2 sm:line-clamp-none">
          {title}
        </span>
        <span className="text-[13px] sm:text-[14px] md:text-[15px] text-text-description line-clamp-2 sm:line-clamp-3">
          {description}
        </span>
        <div className="mt-auto pt-3 sm:pt-4 flex flex-col gap-[10px] sm:gap-[15px]">
          <Tags tags={tags?.split(",") || []} limit />
          <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
        </div>
      </div>
      <div className="relative w-24 h-24 sm:w-32 sm:h-24 rounded-md overflow-hidden self-start flex-shrink-0">
        <Image
          src={thumbnail}
          alt={`thumbnail for ${title}`}
          className="object-cover rounded-md transition-transform duration-300 group-hover:scale-125"
          sizes="(max-width: 640px) 96px, 130px"
          fill
          priority
        />
      </div>
    </Link>
  );
}
