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
    <Link href={url} className="cursor-pointer">
      <div
        className="flex flex-col p-4 h-full rounded-lg border border-border bg-background-secondary 
          hover:shadow-xl dark:hover:shadow-none dark:hover:border-primary-400 
          transition-all duration-200"
      >
        <div className="flex-1">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="mt-auto pt-4 flex flex-col gap-3">
          <Tags tags={tags?.split(",") || []} />
          <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
        </div>
      </div>
    </Link>
  );
}
