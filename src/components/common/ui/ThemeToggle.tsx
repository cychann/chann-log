"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dot, LucideIcon, Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeItemProps {
  title: "light" | "dark" | "system";
  label: string;
  Icon: LucideIcon;
  currentTheme: string | undefined;
  onSelect: (theme: string) => void;
}

const ThemeItem = ({
  title,
  Icon,
  label,
  currentTheme,
  onSelect,
}: ThemeItemProps) => (
  <DropdownMenuItem onClick={() => onSelect(title)} className="justify-between">
    <div className="flex items-center gap-2">
      <Icon size={14} />
      {label}
    </div>
    {currentTheme === title && <Dot />}
  </DropdownMenuItem>
);

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeOptions = [
    { title: "light", label: "Light", Icon: Sun },
    { title: "dark", label: "Dark", Icon: Moon },
    { title: "system", label: "System", Icon: Monitor },
  ] as const;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => (
          <ThemeItem
            key={option.title}
            title={option.title}
            label={option.label}
            Icon={option.Icon}
            currentTheme={theme}
            onSelect={setTheme}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
