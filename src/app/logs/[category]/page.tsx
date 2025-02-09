import LogCategoryContent from "@/components/pages/log/LogCategoryContent";

type LogCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

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
    <LogCategoryContent category={category} />
  );
}
