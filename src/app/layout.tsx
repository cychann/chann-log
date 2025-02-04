import type { Metadata } from "next";
import "@/config/global.css";

import Header from "@/components/layout/Header";
import KBarContainer from "@/components/KBar/KBarContainer";
import { ThemeProvider } from "@/context/ThemeProvider";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Yoochan's Dev Blog",
  description:
    "프론트엔드 개발자 최유찬의 기술 블로그입니다. 개발과 관련한 기술적 인사이트를 공유합니다.",
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
