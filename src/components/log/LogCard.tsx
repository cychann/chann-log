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
    <Link href={url} className="flex justify-between py-6 group">
      <div className="flex flex-col max-w-[calc(100%-144px)]">
        <span className="text-[20px] font-bold mb-[6px] overflow-hidden text-ellipsis group-hover:text-primary-600 transition-colors">
          {title}
        </span>
        <div className="mt-auto pt-4 flex flex-col gap-[15px]">
          <Tags tags={tags?.split(",") || []} limit />
          <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
        </div>
      </div>
    </Link>
  );
}
