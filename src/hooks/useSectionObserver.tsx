import { useEffect, useState } from "react";
import type { RefObject } from "react";

export function useSectionObserver(
  refs: { id: string; ref: RefObject<HTMLDivElement | null> }[]
) {
  const [activeId, setActiveId] = useState<string>("aboutme");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.85,
      }
    );

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  return activeId;
}
