import { LOG_DATA } from "@/config/const";
import { getCategoryList, getPostCount, getPostList } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function logPage() {
  const categoryList = getCategoryList("logs");
  const postCounts = await Promise.all(
    categoryList.map((category) => getPostCount("logs", category))
  );

  return (
    <section className="mx-auto mt-12 w-full max-w-[960px] px-4">
      <h1 className="text-4xl font-extrabold mb-2">Log</h1>
      <p className="text-gray-800 mb-6">
        개발하며 공부하거나 경험한 내용들을 <br />
        소소하게 기록하는 공간입니다😊
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
              <p className="text-gray-700">{LOG_DATA[category]?.desc}</p>
            </div>
            <p className="text-gray-500 text-sm">{postCounts[index]}개의 글</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
