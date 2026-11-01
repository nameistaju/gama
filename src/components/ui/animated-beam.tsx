"use client";

import React, { useEffect, useId, useState, type RefObject } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  repeat?: number;
  repeatDelay?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3.5,
  delay = 0,
  pathColor = "#94A3B8",
  pathWidth = 2,
  pathOpacity = 0.65,
  gradientStartColor = "#0457DF",
  gradientStopColor = "#00D4FF",
  repeat = Infinity,
  repeatDelay = 0,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, "_");
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [gradientCoords, setGradientCoords] = useState({
    x1: [0, 0],
    x2: [0, 0],
    y1: [0, 0],
    y2: [0, 0],
  });

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlX = (startX + endX) / 2;
        const controlY = (startY + endY) / 2 + curvature;

        const algebraicPath = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
        setPathD(algebraicPath);

        const dx = endX - startX;
        const dy = endY - startY;
        const dist = Math.hypot(dx, dy) || 1;
        const nx = dx / dist;
        const ny = dy / dist;
        const beamLen = Math.max(35, dist * 0.4);

        if (reverse) {
          setGradientCoords({
            x1: [endX + nx * beamLen, startX - nx * beamLen],
            x2: [endX, startX],
            y1: [endY + ny * beamLen, startY - ny * beamLen],
            y2: [endY, startY],
          });
        } else {
          setGradientCoords({
            x1: [startX - nx * beamLen, endX + nx * beamLen],
            x2: [startX, endX],
            y1: [startY - ny * beamLen, endY + ny * beamLen],
            y2: [startY, endY],
          });
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    if (fromRef.current) {
      resizeObserver.observe(fromRef.current);
    }
    if (toRef.current) {
      resizeObserver.observe(toRef.current);
    }

    window.addEventListener("resize", updatePath);

    updatePath();

    const t1 = setTimeout(updatePath, 100);
    const t2 = setTimeout(updatePath, 400);
    const t3 = setTimeout(updatePath, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", updatePath);
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    reverse,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
    >
      {/* Base Connection Track Line (crisp and visible at all times) */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      {/* Animated Traveling Prism Laser Beam */}
      <path
        d={pathD}
        strokeWidth={pathWidth + 1}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
        style={{
          filter: `drop-shadow(0 0 4px ${gradientStopColor}aa)`,
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          animate={{
            x1: gradientCoords.x1,
            x2: gradientCoords.x2,
            y1: gradientCoords.y1,
            y2: gradientCoords.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat,
            repeatDelay,
            repeatType: "loop",
          }}
        >
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop offset="20%" stopColor={gradientStartColor} stopOpacity="0.9"></stop>
          <stop offset="80%" stopColor={gradientStopColor} stopOpacity="1"></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
