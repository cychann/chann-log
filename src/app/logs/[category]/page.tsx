import LogCategoryContent from "@/components/pages/log/LogCategoryContent";

type LogCategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateMetadata({
  params: { category },
}: LogCategoryPageProps) {
  return {
    title: `${category} Logs | Yoochan's Dev Blog"`,
    description: `${category}에 관한 기술 아티클 모음입니다.`,
  };
}

export default function logCategoryPage({
  params: { category },
}: LogCategoryPageProps) {
  return (
    /* @ts-expect-error Async Server Component */
    <LogCategoryContent category={category} />
  );
}
