"use client";

import Link from "next/link";
import NavLink from "@/components/layout/Header/NavLink";
import KBarButton from "../../KBar/KBarButton";
import { ThemeToggle } from "../../common/ui/ThemeToggle";
import GithubLogo from "../../common/ui/GithubLogo";
import { NAV_LIST } from "@/config/const";
import BaseHeader from "./BaseHeader";

export default function DefaultHeader() {
  return <BaseHeader />;
}
