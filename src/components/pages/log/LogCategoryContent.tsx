import React from "react";
import LogList from "@/components/log/LogList";
import { LOG_DATA } from "@/config/const";
import { getLogCount, getLogList } from "@/lib/posts/log";
import Image from "next/image";

type LogCategoryContentProps = {
  category: string;
};

export default async function LogCategoryContent({
  category,
}: LogCategoryContentProps) {
  const postCount = await getLogCount(category);
  const postList = await getLogList(category);
  return (
    <section className="mx-auto mt-12 w-full max-w-[960px] px-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {LOG_DATA[category]?.icon.startsWith("/") ? (
            <Image
              src={LOG_DATA[category]?.icon}
              alt={`${category} icon`}
              width={36}
              height={36}
            />
          ) : (
            <p className="text-4xl">{LOG_DATA[category]?.icon}</p>
          )}
          <h1 className="text-4xl font-extrabold">{category}</h1>
          <p className="text-2xl font-bold rounded-full bg-slate-300 px-2">
            {postCount}
          </p>
        </div>
        <p className="text-gray-600 mb-6">{LOG_DATA[category].desc}</p>
      </div>

      <LogList postList={postList} />
    </section>
  );
}
