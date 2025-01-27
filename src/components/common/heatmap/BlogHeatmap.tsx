"use client";

import React, { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { CircleHelp } from "lucide-react";
import Link from "next/link";

interface Props {
  dateData: Array<{
    date: string;
    count: number;
    posts?: Array<{
      title: string;
      url: string;
      category: string;
      type: string;
    }>;
  }>;
}

export default function BlogHeatmap({ dateData }: Props) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const dateDateLen = dateData.length;
  const endDate = new Date();
  const startDate = new Date(
    endDate.getFullYear() - 1,
    endDate.getMonth(),
    endDate.getDate()
  );

  const handleDateClick = (value: any) => {
    if (!value || !value.count) {
      setSelectedDate(null);
      return;
    }
    setSelectedDate(value.date);
  };

  return (
    <section className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="font-bold text-lg text-gray-800">
          {dateDateLen} activities
        </div>
        <div className="relative group">
          <CircleHelp className="w-5 h-5 text-primary hover:text-primary/80 transition-colors" />
          <div className="absolute hidden group-hover:block right-0 top-full mt-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg whitespace-nowrap z-10">
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
      <div className="flex items-center justify-end gap-3 mt-6">
        <span className="text-sm text-gray-500">Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
          <div className="w-3 h-3 rounded-sm bg-primary-200"></div>
          <div className="w-3 h-3 rounded-sm bg-primary-400"></div>
          <div className="w-3 h-3 rounded-sm bg-primary-600"></div>
          <div className="w-3 h-3 rounded-sm bg-primary-800"></div>
        </div>
        <span className="text-sm text-gray-500">More</span>
      </div>

      {selectedDate && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-in slide-in-from-top fade-in duration-300">
          <h3 className="font-medium text-gray-800 mb-4">{selectedDate}</h3>
          <ul className="space-y-3">
            {dateData
              .find((data) => data.date === selectedDate)
              ?.posts?.map((post, idx) => (
                <li key={idx}>
                  <Link
                    href={post.url}
                    className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        ({post.type})
                      </span>
                      <h4 className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {post.category}
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </section>
  );
}
