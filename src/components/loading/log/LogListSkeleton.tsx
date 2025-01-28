import LogCardSkeleton from "./LogCardSkeleton";

export default function LogListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <LogCardSkeleton key={index} />
      ))}
    </div>
  );
}
