import Category from "./Category";

type CategoryListProps = {
  categories: string[];
  selectedCategory: string;
  categoryPostCounts: Record<string, number>;
};

export default function CategoryList({
  categories,
  selectedCategory,
  categoryPostCounts,
}: CategoryListProps) {
  return (
    <ul className="flex items-center gap-2 mb-8">
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          selected={selectedCategory === category}
          postCount={categoryPostCounts[category]}
        />
      ))}
    </ul>
  );
}
