import { LOG_DATA } from "@/config/const";
import { getLogCategoryList, getLogCount } from "@/lib/posts/log";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function logPage() {
  const categoryList = getLogCategoryList();
  const postCounts = categoryList.map((category) => getLogCount(category));

  return (
    <section className="mx-auto mt-12 w-full max-w-[960px] px-4">
      <h1 className="text-4xl font-extrabold mb-2">Log</h1>
      <p className="text-text-primary mb-6">
        작은 배움과 경험들을 <br />
        간단히 기록하는 공간입니다. 😊
      </p>
      <div className="space-y-4">
        {categoryList.map((category, index) => (
          <Link
            href={`/logs/${category}`}
            key={category}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                {LOG_DATA[category]?.icon.startsWith("/") ? (
                  <Image
                    src={LOG_DATA[category]?.icon}
                    alt={`${category} icon`}
                    width={20}
                    height={20}
                  />
                ) : (
                  <p>{LOG_DATA[category]?.icon}</p>
                )}
                <h3 className="font-bold text-xl">{category}</h3>
              </div>
              <p className="text-text-secondary">{LOG_DATA[category]?.desc}</p>
            </div>
            <p className="text-text-tertiary text-sm">
              {postCounts[index]}개의 글
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
