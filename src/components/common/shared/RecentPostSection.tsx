import Link from "next/link";
import { ReactNode } from "react";

interface ListSectionProps {
  title: string;
  link: string;
  children: ReactNode;
  className?: string;
}

export default function RecentPostSection({
  title,
  link,
  children,
  className = "",
}: ListSectionProps) {
  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
          <Link
            href={link}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
          >
            더보기
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}
