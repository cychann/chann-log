"use client";

import React, { useState, useEffect } from "react";
import CalendarHeatmap, {
  ReactCalendarHeatmapValue,
} from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import { PostHeatMap } from "@/types/post";

type BlogHeatmapProps = {
  dateData: Array<{
    date: string;
    count: number;
    posts?: PostHeatMap[];
  }>;
};

export default function BlogHeatmap({ dateData }: BlogHeatmapProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const dateDateLen = dateData.length;
  const endDate = new Date();
  const startDate = new Date(
    endDate.getFullYear() - 1,
    endDate.getMonth(),
    endDate.getDate()
  );

  const handleDateClick = (
    value: ReactCalendarHeatmapValue<string> | undefined
  ) => {
    setIsVisible(false);

    setTimeout(() => {
      setSelectedDate(null);

      if (!value || !value.count) {
        setSelectedDate(null);
      } else {
        setSelectedDate(value.date);
        setIsVisible(true);
      }
    }, 300);
  };

  useEffect(() => {
    if (selectedDate) {
      setIsVisible(true);
    }
  }, [selectedDate]);

  return (
    <section className="rounded-lg border border-border bg-background-secondary p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-lg font-bold text-text-primary">
          {dateDateLen} activities
        </div>
        <div className="relative group">
          <CircleHelp className="h-5 w-5 text-primary transition-colors hover:text-primary/80" />
          <div className="absolute right-0 top-full z-10 mt-2 hidden rounded-md bg-background px-3 py-2 text-sm text-text-primary shadow-lg whitespace-nowrap group-hover:block">
            Content Statistics
          </div>
        </div>
      </div>

      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={dateData}
        onClick={handleDateClick}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />

      <div className="mt-6 flex items-center justify-end gap-3">
        <span className="text-sm text-gray-500">Less</span>
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-sm dark:bg-[#2d2d2d] bg-[#f0f0f0]"></div>
          <div className="h-3 w-3 rounded-sm dark:bg-primary-800 bg-primary-200"></div>
          <div className="h-3 w-3 rounded-sm dark:bg-primary-600 bg-primary-400"></div>
          <div className="h-3 w-3 rounded-sm dark:bg-primary-400 bg-primary-600"></div>
          <div className="h-3 w-3 rounded-sm dark:bg-primary-200 bg-primary-800"></div>
        </div>
        <span className="text-sm text-gray-500">More</span>
      </div>

      <div
        className={`mt-6 space-y-4 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {selectedDate && (
          <>
            <h3 className="font-medium">{selectedDate}</h3>
            <div className="space-y-3">
              {dateData
                .find((data) => data.date === selectedDate)
                ?.posts?.map((post, idx) => (
                  <Link
                    href={post.url}
                    key={idx}
                    className="rounded-lg border border-border bg-background p-4 shadow-sm group flex items-center justify-between opacity-0 animate-fadeIn"
                    style={{
                      animationDelay: `${idx * 150}ms`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        ({post.type})
                      </span>
                      <h4 className="text-sm text-inverse transition-colors group-hover:text-primary">
                        {post.title}
                      </h4>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {post.category}
                    </div>
                  </Link>
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
