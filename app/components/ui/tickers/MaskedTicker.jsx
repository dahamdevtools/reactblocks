"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, Children } from "react";

export default function MaskedTicker({
  children,
  direction = 1,
  gap = 16,
  speed = 50,
  duplicates = 5,
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const contentWidth = content.offsetWidth;

    const clone = content.cloneNode(true);
    container.appendChild(clone);

    const duration = contentWidth / speed / 10;

    const tween = gsap.to(container, {
      x: direction > 0 ? `-=${contentWidth}` : `+=${contentWidth}`,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const value = parseFloat(x);
          if (direction > 0) {
            return `${value % contentWidth}px`;
          } else {
            return `${
              ((value % contentWidth) - contentWidth) % contentWidth
            }px`;
          }
        },
      },
    });

    return () => {
      tween.kill();
      if (container.contains(clone)) {
        container.removeChild(clone);
      }
    };
  }, [direction, speed, children, gap, duplicates]);

  const allChildren = [];
  const childrenArray = Children.toArray(children);

  for (let i = 0; i < duplicates; i++) {
    childrenArray.forEach((child, index) => {
      allChildren.push(
        <div key={`${i}-${index}`} style={{ marginRight: `${gap}px` }}>
          {child}
        </div>
      );
    });
  }

  return (
    <div className="relative overflow-hidden w-full py-6 mask-l-from-70% mask-r-from-70%">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <div ref={contentRef} className="flex items-center">
          {allChildren}
        </div>
      </div>
    </div>
  );
}
