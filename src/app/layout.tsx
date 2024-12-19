import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
