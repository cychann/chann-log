"use client";

interface SearchBoxProps {
  defaultValue?: string;
  onSearch: (value: string) => void;
}

export default function SearchBox({
  defaultValue = "",
  onSearch,
}: SearchBoxProps) {
  const handleSearch = (keyword: string) => {
    onSearch(keyword);
  };

  return (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search posts..."
      className="w-full p-2 border rounded"
    />
  );
}
