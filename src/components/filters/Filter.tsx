"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import SearchBox from "./SearchBox";
import CategoryList from "./CategoryList";

interface FiltersProps {
  categories: string[];
  initialCategory?: string;
  initialSearch?: string;
}

export default function Filters({
  categories,
  initialCategory = "All",
  initialSearch = "",
}: FiltersProps) {
  const { updateQueryParams } = useQueryParams();

  const handleSearch = (search: string) => {
    updateQueryParams({ search: search || null });
  };

  const handleCategorySelect = (category: string) => {
    updateQueryParams({
      category: category === "All" ? null : category,
    });
  };

  return (
    <section className="space-y-6">
      <SearchBox defaultValue={initialSearch} onSearch={handleSearch} />
      <CategoryList
        categories={categories}
        selectedCategory={initialCategory}
        onCategorySelect={handleCategorySelect}
      />
    </section>
  );
}
