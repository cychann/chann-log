import LogContent from "@/components/pages/log/LogContent";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Logs | Yoochan's Dev Blog",
  description: "일상적인 개발 경험과 문제 해결 과정을 기록한 개발 로그입니다.",
};

export default function logPage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <LogContent category="All" />
    </>
  );
}
