import type { Metadata } from "next";
import "@/config/global.css";

import Navbar from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "최유찬 개발 블로그",
  description: "개발 지식과 경험 내용을 기록합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full">
        <header className="w-full py-4 border-b-[1px] shadow-sm">
          <Navbar />
        </header>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
