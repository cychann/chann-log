import { HEADER_HEIGHT } from "@/config/const";
import { useEffect, useState } from "react";

export function usePostScroll() {
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [postTitle, setPostTitle] = useState("");

  useEffect(() => {
    const titleElement = document.querySelector("#post-title");
    if (titleElement?.textContent) {
      setPostTitle(titleElement.textContent);
    }

    const handleScroll = () => {
      const titleElement = document.querySelector("#post-title");
      if (!titleElement) return;

      const titlePosition = titleElement.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;

      setIsScrolled(titlePosition < HEADER_HEIGHT);

      const currentProgress = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, isScrolled, postTitle };
}
