import { formatKoreanDate } from "@/lib/formatKoreanDate";
import { Clock } from "lucide-react";

type PostDateTimeInfoProps = {
  date: string;
  readingMinutes: number;
};

export default function PostDateTimeInfo({
  date,
  readingMinutes,
}: PostDateTimeInfoProps) {
  return (
    <div className="flex items-center text-[13px] text-text-tertiary gap-2">
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
