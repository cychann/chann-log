import { LogPreview } from "@/types/post";
import React from "react";
import Tags from "@/components/common/display/Tags";
import PostDateTimeInfo from "@/components/common/display/PostDateTimeInfo";
import Link from "next/link";

type LogCardProps = {
  post: LogPreview;
};

export default function LogCard({ post }: LogCardProps) {
  const { title, tags, date, readingMinutes, url } = post;
  return (
    <Link href={url} className="block py-4 sm:py-6 group">
      <div className="flex flex-col w-full">
        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-bold mb-[6px] overflow-hidden text-ellipsis group-hover:text-primary-600 transition-colors line-clamp-2 sm:line-clamp-none">
          {title}
        </span>
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-4 flex flex-col gap-2 sm:gap-[15px]">
          <Tags tags={tags?.split(",") || []} limit />
          <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
        </div>
      </div>
    </Link>
  );
}
