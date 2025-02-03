import type { Metadata } from "next";
import "@/config/global.css";

import Header from "@/components/layout/Header";
import KBarContainer from "@/components/KBar/KBarContainer";
import { ThemeProvider } from "@/context/ThemeProvider";
import Footer from "@/components/layout/Footer";

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
    <html
      lang="ko"
      className="scroll-smooth overflow-y-scroll"
      suppressHydrationWarning
    >
      <body className="w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* @ts-expect-error Async Server Component */}
          <KBarContainer>
            <Header />
            <main className="max-w-6xl mx-auto">{children}</main>
            <Footer />
          </KBarContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
