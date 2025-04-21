"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  blur: number;
  direction: { x: number; y: number };
}

interface FloatingElementsProps {
  className?: string;
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minBlur?: number;
  maxBlur?: number;
}

export default function FloatingElements({
  className,
  count = 15,
  colors = ["#0ea5e9", "#6366f1", "#8b5cf6", "#d946ef", "#ec4899"],
  minSize = 10,
  maxSize = 40,
  minSpeed = 0.5,
  maxSpeed = 1.5,
  minOpacity = 0.1,
  maxOpacity = 0.3,
  minBlur = 2,
  maxBlur = 6,
}: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number>(0);

  const randomBetween = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Initialize elements
    elementsRef.current = Array.from({ length: count }, () => {
      const size = randomBetween(minSize, maxSize);
      return {
        x: randomBetween(0, rect.width - size),
        y: randomBetween(0, rect.height - size),
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: randomBetween(minSpeed, maxSpeed),
        opacity: randomBetween(minOpacity, maxOpacity),
        blur: randomBetween(minBlur, maxBlur),
        direction: {
          x: Math.random() > 0.5 ? 1 : -1,
          y: Math.random() > 0.5 ? 1 : -1,
        },
      };
    });

    // Create elements
    elementsRef.current.forEach((element) => {
      const div = document.createElement("div");
      div.className = "absolute rounded-full";
      div.style.width = `${element.size}px`;
      div.style.height = `${element.size}px`;
      div.style.backgroundColor = element.color;
      div.style.opacity = element.opacity.toString();
      div.style.filter = `blur(${element.blur}px)`;
      div.style.left = `${element.x}px`;
      div.style.top = `${element.y}px`;
      div.style.transition = "transform 0.1s ease-out";
      container.appendChild(div);
    });

    // Animation loop
    const animate = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const elements = containerRef.current.children;

      for (let i = 0; i < elementsRef.current.length; i++) {
        const element = elementsRef.current[i];
        const domElement = elements[i] as HTMLDivElement;

        // Update position
        element.x += element.speed * element.direction.x;
        element.y += element.speed * element.direction.y;

        // Bounce off walls
        if (element.x <= 0 || element.x >= rect.width - element.size) {
          element.direction.x *= -1;
        }

        if (element.y <= 0 || element.y >= rect.height - element.size) {
          element.direction.y *= -1;
        }

        // Apply position
        domElement.style.left = `${element.x}px`;
        domElement.style.top = `${element.y}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [
    count,
    colors,
    minSize,
    maxSize,
    minSpeed,
    maxSpeed,
    minOpacity,
    maxOpacity,
    minBlur,
    maxBlur,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
      data-pol-id="neztci"
      data-pol-file-name="floating-elements"
      data-pol-file-type="component"
    />
  );
}
