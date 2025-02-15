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
    <section className="flex flex-col items-center gap-2 mt-14 pb-4 border-b ">
      <h1 id="post-title" className="font-extrabold text-3xl">
        {title}
      </h1>
      <h4 className="text-primary font-bold text-lg">{category}</h4>
      <PostDateTimeInfo
        date={date}
        readingMinutes={readingMinutes}
        justify="center"
      />
    </section>
  );
}
