import React from "react";
import PostDateTimeInfo from "@/components/common/display/PostDateTimeInfo";
import { PostHeader } from "@/types/post";

export default function PostHeader({
  title,
  date,
  category,
  readingMinutes,
}: PostHeader) {
  return (
    <section className="w-full flex flex-col items-center gap-2 mt-14">
      <h1 className="font-extrabold text-3xl pb-4">{title}</h1>
      <div className="w-full flex items-center justify-between gap-4 border-t-2 pt-4">
        <h4 className="text-sm px-2 py-1 rounded-lg text-[13px] bg-primary text-white font-semibold">
          {category}
        </h4>
        <PostDateTimeInfo date={date} readingMinutes={readingMinutes} />
      </div>
    </section>
  );
}
