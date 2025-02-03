"use client";

import { usePathname } from "next/navigation";
import PostDetailHeader from "./Header/PostDetailHeader";
import DefaultHeader from "./Header/DefaultHeader";

const POST_DETAIL_PATTERN = /\/(articles|logs)\/[^/]+\/[^/]+$/;

type HeaderType = {
  pattern: RegExp;
  Component: React.ComponentType;
};

const HEADER_CONFIGS: HeaderType[] = [
  {
    pattern: POST_DETAIL_PATTERN,
    Component: PostDetailHeader,
  },
  {
    pattern: /.*/,
    Component: DefaultHeader,
  },
];

export default function Header() {
  const pathname = usePathname();

  const { Component } =
    HEADER_CONFIGS.find(({ pattern }) => pattern.test(pathname)) ??
    HEADER_CONFIGS[HEADER_CONFIGS.length - 1];

  return <Component />;
}
