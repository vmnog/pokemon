import { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  fetchMore(): void;
}

export function InfiniteScroll({ fetchMore }: InfiniteScrollProps) {
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          fetchMore();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);

  return <div ref={containerRef} />;
}
