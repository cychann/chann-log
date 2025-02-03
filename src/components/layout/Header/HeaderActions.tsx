import KBarButton from "@/components/KBar/KBarButton";
import GithubLogo from "@/components/common/ui/GithubLogo";
import { ThemeToggle } from "@/components/common/ui/ThemeToggle";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <KBarButton />
      <ThemeToggle />
      <GithubLogo />
    </div>
  );
}
