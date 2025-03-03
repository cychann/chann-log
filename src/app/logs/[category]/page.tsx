import LogContent from "@/components/pages/log/LogContent";
import { getLogCategoryList } from "@/lib/posts/log";

type LogCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  const categories = await getLogCategoryList();
  return [{ category: "All" }, ...categories.map((category) => ({ category }))];
}

export async function generateMetadata({ params }: LogCategoryPageProps) {
  const { category } = await params;
  return {
    title: `${category} Logs | Yoochan's Dev Blog"`,
    description: `${category}에 관한 기술 아티클 모음입니다.`,
  };
}

export default async function logCategoryPage({
  params,
}: LogCategoryPageProps) {
  const { category } = await params;

  return (
    /* @ts-expect-error Async Server Component */
    <LogContent category={category} />
  );
}
