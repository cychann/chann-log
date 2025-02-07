import Link from "next/link";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type ListSectionProps = {
  title: string;
  link: string;
  children: ReactNode;
  className?: string;
};

export default function RecentPostSection({
  title,
  link,
  children,
  className = "",
}: ListSectionProps) {
  return (
    <section className={`${className}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-2xl font-bold text-text-primary">{title}</h4>
          <Link
            href={link}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-1 group"
          >
            <span className="leading-none group-hover:animate-floating">
              더보기
            </span>
            <ChevronRight className="w-4 h-4 group-hover:animate-floating" />
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}
