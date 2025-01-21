"use client";

import { usePathname } from "next/navigation";
import PostDetailHeader from "./PostDetailHeader";
import DefaultHeader from "./DefaultHeader";

export default function Header() {
  const pathname = usePathname();
  const isPostDetail = /\/(articles|logs)\/[^/]+\/[^/]+$/.test(pathname);

  if (isPostDetail) {
    return <PostDetailHeader />;
  }

  return <DefaultHeader />;
}
