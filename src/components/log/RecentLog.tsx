import { getLatestLogs } from "@/lib/posts/log";
import LogCard from "./LogCard";
import RecentPostSection from "../common/shared/RecentPostSection";

export default async function RecentLog() {
  const latestLogs = await getLatestLogs(3);

  return (
    <RecentPostSection title="최신 로그" link="/logs">
      <ul className="flex flex-col">
        {latestLogs.map((post) => (
          <li key={post.title}>
            <LogCard post={post} />
          </li>
        ))}
      </ul>
    </RecentPostSection>
  );
}
