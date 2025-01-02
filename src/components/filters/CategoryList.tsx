type Props = {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
};

export default function CategoryList({
  categories,
  selectedCategory,
  onCategorySelect,
}: Props) {
  return (
    <ul className="flex items-center gap-2">
      {categories.map((category) => (
        <li
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`cursor-pointer px-4 py-2 rounded hover:bg-slate-100 transition-all duration-200  ${
            selectedCategory === category ? "bg-black text-white" : "text-black"
          }`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
