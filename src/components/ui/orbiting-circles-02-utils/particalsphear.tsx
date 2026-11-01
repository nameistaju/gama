"use client";

import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  color: string;
  baseRadius: number;
}

const PALETTE = [
  "rgba(4, 87, 223, ",     // GAMA Cobalt Blue
  "rgba(56, 189, 248, ",   // GAMA Sky Cyan
  "rgba(254, 184, 36, ",   // GAMA Amber
  "rgba(13, 186, 108, ",   // GAMA Emerald
  "rgba(192, 132, 252, ",  // Violet
  "rgba(248, 113, 113, ",  // Coral
];

export default function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Generate points on sphere using Fibonacci sphere algorithm
    const numPoints = 850;
    const points: Point3D[] = [];
    const sphereRadius = Math.min(width, height) * 0.44;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;

      points.push({
        x: sphereRadius * Math.cos(theta) * Math.sin(phi),
        y: sphereRadius * Math.sin(theta) * Math.sin(phi),
        z: sphereRadius * Math.cos(phi),
        color: PALETTE[i % PALETTE.length],
        baseRadius: 1.2 + Math.random() * 1.4,
      });
    }

    let angleY = 0;
    const rotSpeedY = 0.0035;
    const tiltX = 0.22; // slight downward tilt

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const focalLength = sphereRadius * 2.2;

      angleY += rotSpeedY;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      // Sort points back-to-front for proper depth perception
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate slightly around X (tilt)
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const scale = focalLength / (focalLength + z2 + sphereRadius * 0.5);
        const projX = cx + x1 * scale;
        const projY = cy + y2 * scale;
        const alpha = Math.max(0.12, Math.min(0.95, (z2 + sphereRadius) / (sphereRadius * 1.9)));
        const r = Math.max(0.6, p.baseRadius * scale);

        return {
          x: projX,
          y: projY,
          z: z2,
          r,
          alpha,
          color: `${p.color}${alpha.toFixed(2)})`,
        };
      });

      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="size-full block"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
