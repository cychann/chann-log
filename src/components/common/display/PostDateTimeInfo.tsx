import { CiCalendarDate, CiClock2 } from "react-icons/ci";

interface PostDateTimeInfoProps {
  date: string;
  readingMinutes: number;
  justify?: "between" | "center";
}

export default function PostDateTimeInfo({
  date,
  readingMinutes,
  justify = "between",
}: PostDateTimeInfoProps) {
  const justifyClass =
    justify === "center" ? "justify-center" : "justify-between";
  return (
    <div
      className={`w-full flex items-center text-sm text-text-tertiary mt-2 ${justifyClass} gap-2`}
    >
      <div className="flex items-center">
        <CiCalendarDate className="mr-1" size={16} />
        <p className="leading-tight">{date}</p>
      </div>
      <div className="flex items-center">
        <CiClock2 className="mr-1" size={16} />
        <p className="leading-tight">{readingMinutes} min</p>
      </div>
    </div>
  );
}
