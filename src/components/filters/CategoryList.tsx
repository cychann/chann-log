import Category from "./Category";

type CategoryListProps = {
  categories: string[];
  selectedCategory: string;
  categoryPostCounts: Record<string, number>;
  basePath: "articles" | "logs";
};

export default function CategoryList({
  categories,
  selectedCategory,
  categoryPostCounts,
  basePath,
}: CategoryListProps) {
  return (
    <div className="w-full h-full px-6 border-l border-border">
      <span className="text-text-tertiary text-[13px]">카테고리</span>
      <ul className=" flex flex-wrap items-center gap-2 mt-[13px]">
        {categories.map((category) => (
          <Category
            key={category}
            category={category}
            selected={selectedCategory === category}
            postCount={categoryPostCounts[category]}
            basePath={basePath}
          />
        ))}
      </ul>
    </div>
  );
}
