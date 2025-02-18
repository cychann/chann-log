import { formatKoreanDate } from "@/lib/formatKoreanDate";
import { Clock } from "lucide-react";

type PostDateTimeInfoProps = {
  date: string;
  readingMinutes: number;
  justify?: "between" | "center";
};

export default function PostDateTimeInfo({
  date,
  readingMinutes,
  justify = "between",
}: PostDateTimeInfoProps) {
  const justifyClass =
    justify === "center" ? "justify-center" : "justify-between";
  return (
    <div
      className={`w-full flex items-center text-sm text-text-tertiary mt-2 gap-2`}
    >
      <div className="flex items-center">
        <p className="leading-tight">{formatKoreanDate(date)}</p>
      </div>
      <span>·</span>
      <div className="flex items-center gap-1">
        <Clock size={16} />
        <p className="leading-tight">{readingMinutes} min read</p>
      </div>
    </div>
  );
}
