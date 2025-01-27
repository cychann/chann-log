import ListPageHeader from "@/components/pages/ListPageHeader";
import LogContent from "@/components/pages/log/LogContent";
import { getLogCategoryList } from "@/lib/posts/log";

import React from "react";

export default function logPage() {
  const categoryList = getLogCategoryList();

  return (
    <ListPageHeader
      title="Log"
      description="작은 배움과 경험들을 간단히 기록하는 공간입니다. 😊"
    >
      <LogContent categoryList={categoryList} />
    </ListPageHeader>
  );
}
