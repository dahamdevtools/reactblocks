"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function HorizontalProductImageGallery() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [openLightBox, setOpenLightBox] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const rafRef = useRef(null);
  const targetPosition = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const animate = () => {
      setMousePosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.1,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.1,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    if (isHoveringImage) {
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isHoveringImage]);

  const currentTheme = mounted ? resolvedTheme || theme : "light";

  const images = [
    `assets/images/image-1-${currentTheme}.svg`,
    `assets/images/image-2-${currentTheme}.svg`,
    `assets/images/image-3-${currentTheme}.svg`,
    `assets/images/image-4-${currentTheme}.svg`,
  ];

  if (!mounted) {
    return null;
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    targetPosition.current = { x, y };
  };

  return (
    <>
      <div className="w-full h-fit grid grid-cols-10 gap-2">
        <img
          src={images[currentItem]}
          onClick={() => setOpenLightBox(true)}
          alt="image"
          className="w-full col-span-8 aspect-square rounded-lg sm:rounded-2xl object-cover object-center cursor-pointer"
        />
        <div className="w-full col-span-2 flex flex-col gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              onClick={() => setCurrentItem(index)}
              alt="image"
              className="min-w-0 flex-1 aspect-square rounded-lg sm:rounded-2xl object-cover object-center cursor-pointer"
            />
          ))}
        </div>
      </div>
      {openLightBox && (
        <div
          onClick={() => setOpenLightBox(false)}
          className="w-screen h-screen fixed top-0 left-0 p-10 sm:p-20 flex items-center justify-center z-50 bg-neutral-500/10 dark:bg-neutral-950/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => {
              setIsHoveringImage(false);
              setMousePosition({ x: 0.5, y: 0.5 });
              targetPosition.current = { x: 0.5, y: 0.5 };
            }}
            className="relative h-full flex items-center justify-center overflow-hidden"
          >
            <img
              src={images[currentItem]}
              alt="image"
              style={{
                transform: isHoveringImage ? `scale(2)` : "scale(1)",
                transformOrigin: `${mousePosition.x * 100}% ${
                  mousePosition.y * 100
                }%`,
                transition: isHoveringImage
                  ? "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
                  : "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
              }}
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      )}
    </>
  );
}
