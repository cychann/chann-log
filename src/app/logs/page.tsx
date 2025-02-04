import ListPageHeader from "@/components/pages/ListPageHeader";
import LogContent from "@/components/pages/log/LogContent";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Logs | Yoochan's Dev Blog",
  description: "일상적인 개발 경험과 문제 해결 과정을 기록한 개발 로그입니다.",
};

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
