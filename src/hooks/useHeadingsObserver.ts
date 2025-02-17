import { useEffect, useRef, useState } from "react";

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState<string>("");
  const headingsRef = useRef<{ id: string; element: Element }[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(query));
    headingsRef.current = elements.map((elem) => ({
      id: elem.id ? `#${elem.id}` : "",
      element: elem,
    }));

    const handleObserver: IntersectionObserverCallback = (entries) => {
      const visibleHeadings = headingsRef.current
        .map((heading) => {
          const rect = heading.element.getBoundingClientRect();
          return {
            id: heading.id,
            distance: Math.abs(rect.top + 32),
          };
        })
        .filter((heading) => {
          if (!heading.id) return false;
          const element = document.querySelector(heading.id);
          const rect = element?.getBoundingClientRect();
          return rect && rect.top <= 32;
        })
        .sort((a, b) => a.distance - b.distance);

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].id);
      } else {
        const firstHeading = headingsRef.current[0];
        if (
          firstHeading &&
          firstHeading.element.getBoundingClientRect().top > 32
        ) {
          setActiveId(firstHeading.id);
        }
      }
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-32px 0px 0px 0px",
      threshold: [0, 1],
    });

    elements.forEach((elem) => observer.current?.observe(elem));

    const handleScroll = () => observer.current?.takeRecords();
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [query]);

  return [activeId];
};
