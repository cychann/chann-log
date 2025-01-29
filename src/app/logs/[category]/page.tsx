import LogCategoryContent from "@/components/pages/log/LogCategoryContent";

interface Props {
  params: {
    category: string;
  };
}

export default function page({ params }: Props) {
  const { category } = params;

  return (
    /* @ts-expect-error Async Server Component */
    <LogCategoryContent category={category} />
  );
}
