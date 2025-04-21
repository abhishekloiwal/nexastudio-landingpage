"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  className?: string;
  containerClassName?: string;
  colors?: string[];
  size?: "small" | "medium" | "large";
  interactive?: boolean;
  children?: React.ReactNode;
}

export default function BackgroundGradient({
  className,
  containerClassName,
  colors = ["#0ea5e9", "#6366f1", "#8b5cf6", "#d946ef"],
  size = "medium",
  interactive = true,
  children,
}: BackgroundGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  const sizeMap = {
    small: "h-[300px] w-[300px]",
    medium: "h-[400px] w-[400px]",
    large: "h-[500px] w-[500px]",
  };

  useEffect(() => {
    if (!interactive || !containerRef.current || !gradientRef.current) return;

    const container = containerRef.current;
    const gradient = gradientRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 15;
      const moveY = (y - centerY) / 15;

      gradient.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      gradient.style.transform = "translate(0, 0)";
      gradient.style.transition = "transform 0.5s ease-out";
    };

    const handleMouseEnter = () => {
      gradient.style.transition = "transform 0.1s ease-out";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      data-pol-id="uze01u"
      data-pol-file-name="background-gradient"
      data-pol-file-type="component"
    >
      <div
        ref={gradientRef}
        className={cn(
          "absolute inset-0 blur-3xl opacity-30 transition-transform duration-500",
          sizeMap[size],
          className,
        )}
        style={{
          background: `radial-gradient(circle at center, ${colors.join(", ")})`,
        }}
        data-pol-id="dptow9"
        data-pol-file-name="background-gradient"
        data-pol-file-type="component"
      />

      {children}
    </div>
  );
}
