"use client";

import { usePathname } from "next/navigation";
import PostHeader from "./PostHeader";
import DefaultHeader from "./DefaultHeader";

export default function Header() {
  const pathname = usePathname();
  const isPostDetail = /\/(articles|logs)\/[^/]+\/[^/]+$/.test(pathname);

  if (isPostDetail) {
    return <PostHeader />;
  }

  return <DefaultHeader />;
}
