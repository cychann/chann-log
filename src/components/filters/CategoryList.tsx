import Link from "next/link";

type CategoryListProps = {
  categories: string[];
  selectedCategory: string;
};

export default function CategoryList({
  categories,
  selectedCategory,
}: CategoryListProps) {
  return (
    <ul className="flex items-center gap-2">
      {categories.map((category) => (
        <Link key={category} href={`/articles/${category}`}>
          <li
            className={`cursor-pointer px-4 py-2 rounded hover:bg-slate-100 transition-all duration-200  ${
              selectedCategory === category
                ? "bg-black text-white"
                : "text-black"
            }`}
          >
            {category}
          </li>
        </Link>
      ))}
    </ul>
  );
}
