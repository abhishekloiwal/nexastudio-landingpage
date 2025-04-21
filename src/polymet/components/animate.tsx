"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fade-in"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "bounce"
  | "pulse"
  | "spin";

interface AnimateProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function Animate({
  children,
  variant = "fade-in",
  delay = 0,
  duration = 0.5,
  className,
  threshold = 0.1,
  once = true,
}: AnimateProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            // Add animation class when element is in view
            element.style.opacity = "1";
            element.style.transform = "none";
            hasAnimated.current = true;
          } else if (!entry.isIntersecting && !once && hasAnimated.current) {
            // Reset animation if not once
            applyInitialStyles(element, variant);
            hasAnimated.current = false;
          }
        });
      },
      { threshold },
    );

    // Apply initial styles
    applyInitialStyles(element, variant);

    // Set transition properties
    element.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [variant, delay, duration, threshold, once]);

  return (
    <div
      ref={elementRef}
      className={cn("opacity-0", className)}
      data-pol-id="klhls8"
      data-pol-file-name="animate"
      data-pol-file-type="component"
    >
      {children}
    </div>
  );
}

function applyInitialStyles(element: HTMLElement, variant: AnimationVariant) {
  // Reset styles
  element.style.opacity = "0";

  // Apply variant-specific transform
  switch (variant) {
    case "fade-in":
      element.style.transform = "none";
      break;
    case "fade-up":
      element.style.transform = "translateY(20px)";
      break;
    case "fade-down":
      element.style.transform = "translateY(-20px)";
      break;
    case "fade-left":
      element.style.transform = "translateX(20px)";
      break;
    case "fade-right":
      element.style.transform = "translateX(-20px)";
      break;
    case "zoom-in":
      element.style.transform = "scale(0.95)";
      break;
    case "zoom-out":
      element.style.transform = "scale(1.05)";
      break;
    case "bounce":
      element.style.transform = "translateY(0)";
      element.style.transition = `opacity ${element.style.transition.split(",")[0].split(" ")[1]} ease-out ${element.style.transition.split(",")[0].split(" ")[3]}, transform 0.5s cubic-bezier(0.5, 0, 0.75, 1.5) ${element.style.transition.split(",")[1].split(" ")[3]}`;
      break;
    case "pulse":
      element.style.transform = "scale(1)";
      element.style.animation = `pulse 2s infinite`;
      break;
    case "spin":
      element.style.transform = "rotate(0deg)";
      element.style.animation = `spin 1s infinite linear`;
      break;
  }
}
