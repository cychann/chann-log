import type { Metadata } from "next";
import "@/config/global.css";

import Header from "@/components/layout/Header";
import KBarContainer from "@/components/KBar/KBarContainer";

export const metadata: Metadata = {
  title: "최유찬 개발 블로그",
  description: "개발 지식과 경험 내용을 기록합니다",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth overflow-y-scroll">
      <body className="w-full">
        {/* @ts-expect-error Async Server Component */}
        <KBarContainer>
          <Header />
          <main className="max-w-6xl mx-auto">{children}</main>
        </KBarContainer>
      </body>
    </html>
  );
}
