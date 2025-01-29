import ListPageHeader from "@/components/pages/ListPageHeader";
import LogContent from "@/components/pages/log/LogContent";

import React from "react";

export default function logPage() {
  return (
    <ListPageHeader
      title="Log"
      description="작은 배움과 경험들을 간단히 기록하는 공간입니다. 😊"
    >
      {/* @ts-expect-error Async Server Component */}
      <LogContent />
    </ListPageHeader>
  );
}
