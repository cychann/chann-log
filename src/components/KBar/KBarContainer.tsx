import { getArticleList } from "@/lib/posts/article";
import { KBarWrapper } from "./KBarWrapper";
import { getLogList } from "@/lib/posts/log";
import { createKbarAction } from "@/lib/KBar/kbar";

export default async function KBarContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [articleList, logList] = await Promise.all([
    getArticleList(),
    getLogList(),
  ]);

  const actions = [
    ...articleList.map((post) => createKbarAction(post, "Articles")),
    ...logList.map((post) => createKbarAction(post, "Logs")),
  ];

  return <KBarWrapper actions={actions}>{children}</KBarWrapper>;
}
