import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Ticker({ text, direction, speed = 20 }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const contentWidth = content.offsetWidth;

    const clone = content.cloneNode(true);

    if (direction > 0) {
      container.insertBefore(clone, content);
      gsap.set(container, { x: -contentWidth });
    } else {
      container.appendChild(clone);
    }

    const tween = gsap.to(container, {
      x: direction > 0 ? 0 : `-=${contentWidth}`,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    return () => {
      tween.kill();
      container.removeChild(clone);
    };
  }, [direction, speed]);

  const repeatedText = Array.from({ length: 10 }).map((_, i) => (
    <span key={i} className="w-fit h-fit flex items-center gap-16">
      {text}
    </span>
  ));

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <div ref={contentRef} className="flex">
          {repeatedText}
        </div>
      </div>
    </div>
  );
}
