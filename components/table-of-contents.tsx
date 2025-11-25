"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 1. Find all headings inside the article
    // We use a slight delay to ensure MDX is rendered
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll("article h2, article h3"));
      
      const items = elements.map((elem) => ({
        id: elem.id,
        text: elem.textContent || "",
        level: Number(elem.tagName.charAt(1)),
      }));

      setHeadings(items);

      // 2. Set up the Intersection Observer to track reading position
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        // Highlight when the heading is in the top half of the screen
        { rootMargin: "0px 0px -80% 0px" }
      );

      elements.forEach((elem) => observer.observe(elem));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 self-start hidden lg:block w-full max-w-[240px]">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-1 w-1 rounded-full bg-teal-500" />
        <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
          Contents
        </span>
      </div>
      
      <ul className="relative border-l border-slate-800/50">
        {/* The Active Indicator Line */}
        {/* We render individual border-l items instead of a moving line for cleaner CSS */}
        
        {headings.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${item.id}`)?.scrollIntoView({
                  behavior: "smooth"
                });
                setActiveId(item.id);
              }}
              className={cn(
                "block py-2 pr-4 text-sm transition-all duration-300 border-l-2 -ml-[2px]",
                // Indentation for H3
                item.level === 3 ? "pl-6" : "pl-4",
                // Active State
                activeId === item.id
                  ? "border-teal-500 text-teal-400 font-medium bg-teal-950/10"
                  : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-700"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
