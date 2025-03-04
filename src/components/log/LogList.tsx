"use client";

import React from "react";
import { LogPreview } from "@/types/post";
import LogCard from "./LogCard";
import PaginatedList from "@/components/layout/PaginatedList";

const LogItem = ({ item }: { item: LogPreview }) => {
  return <LogCard post={item} />;
};

type LogListProps = {
  posts: LogPreview[];
};

export default function LogList({ posts }: LogListProps) {
  return (
    <PaginatedList<LogPreview>
      items={posts}
      itemsPerPage={10}
      ItemComponent={LogItem}
    />
  );
}
