import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/config/global.css";

import KBarContainer from "@/components/KBar/KBarContainer";
import { ThemeProvider } from "@/context/ThemeProvider";
import Footer from "@/components/layout/Footer";
import { PostProvider } from "@/context/PostContext";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Yoochan's Dev Blog",
  description:
    "프론트엔드 개발자 최유찬의 기술 블로그입니다. 개발과 관련한 기술적 인사이트를 공유합니다.",
  verification: {
    google: "OFXnEbaZbIqmuvZ468eT9YwzYx1n_BbWXXNyPftG1mI",
  },
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
      <body className="w-full flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostProvider>
            {/* @ts-expect-error Async Server Component */}
            <KBarContainer>
              <Header />
              <main className="max-w-[1200px] w-full mx-auto flex-1">
                {children}
              </main>
              <Footer />
            </KBarContainer>
          </PostProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-NK2YY7521T" />
    </html>
  );
}
