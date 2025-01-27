import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLogCount } from "@/lib/posts/log";
import { LOG_DATA } from "@/config/const";

type LogContentProps = {
  categoryList: string[];
};

export default function LogContent({ categoryList }: LogContentProps) {
  const postCounts = categoryList.map((category) => getLogCount(category));

  return (
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
  );
}
