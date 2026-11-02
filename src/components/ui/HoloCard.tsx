'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useReducedMotion } from '@/lib/useReducedMotion';

export interface HoloCardProps {
  imageSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  maxTilt?: number;
  shadow?: boolean;
  priority?: boolean;
  quality?: number;
}

export default function HoloCard({
  imageSrc,
  alt,
  width = 380,
  height = 450,
  className = '',
  maxTilt = 12,
  shadow = true,
  priority = true,
  quality = 90,
}: HoloCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const reduced = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Responsive tilt state
  const targetTilt = useRef({ x: 0, y: 0, scale: 1 });
  const currentTilt = useRef({ x: 0, y: 0, scale: 1 });
  const isPointerInside = useRef(false);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduced) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      const px = x / rect.width;
      const py = y / rect.height;

      // Normalized coordinates (-1 to 1)
      const nx = (px - 0.5) * 2;
      const ny = (py - 0.5) * 2;

      targetTilt.current = {
        x: -ny * maxTilt,
        y: nx * maxTilt,
        scale: 1.025,
      };

      // Position specular glare directly under cursor
      card.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`);
    },
    [maxTilt, reduced],
  );

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
    isPointerInside.current = true;
    targetTilt.current.scale = 1.025;
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    isPointerInside.current = false;
    targetTilt.current = { x: 0, y: 0, scale: 1 };
  }, []);

  // Responsive Animation Loop (zero-latency lerp, no CSS transition conflict)
  useEffect(() => {
    if (reduced) return;

    const loop = () => {
      const card = cardRef.current;
      const sh = shadowRef.current;
      const glareEl = glareRef.current;

      // Faster response factor when following pointer (0.18 = instant feel), smooth ease out on leave (0.08)
      const factor = isPointerInside.current ? 0.18 : 0.08;

      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * factor;
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * factor;
      currentTilt.current.scale += (targetTilt.current.scale - currentTilt.current.scale) * factor;

      const rx = currentTilt.current.x;
      const ry = currentTilt.current.y;
      const scale = currentTilt.current.scale;

      if (card) {
        card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(${scale.toFixed(3)}, ${scale.toFixed(3)}, ${scale.toFixed(3)})`;
      }

      if (sh) {
        sh.style.transform = `translate3d(${(-ry * 1.3).toFixed(1)}px, ${(rx * 1.1).toFixed(1)}px, 0)`;
        sh.style.opacity = isPointerInside.current ? '0.6' : '0.2';
      }

      if (glareEl) {
        glareEl.style.opacity = isPointerInside.current ? '0.35' : '0';
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{ perspective: '1000px' }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Natural Dark Ambient Counter-Shadow (No green glow) */}
      {shadow && !reduced && (
        <div
          ref={shadowRef}
          className="absolute inset-2 -bottom-4 rounded-3xl bg-black/50 blur-2xl transition-opacity duration-300 pointer-events-none"
          style={{ willChange: 'transform, opacity' }}
        />
      )}

      {/* Main 3D Card (No transition-all on transform, no green border, no green glow) */}
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-2xl overflow-hidden bg-elevated-dark"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.75)'
            : '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
          transition: 'box-shadow 0.25s ease',
        }}
      >
        {/* Base Profile Photo - Clean, Sharp & Natural */}
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover"
            priority={priority}
            quality={quality}
          />
        </div>

        {/* Soft Glass Specular Highlight (Colorless, follows cursor) */}
        {!reduced && (
          <div
            ref={glareRef}
            className="absolute inset-0 pointer-events-none transition-opacity duration-200"
            style={{
              background:
                'radial-gradient(circle 350px at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 75%)',
              mixBlendMode: 'overlay',
              opacity: 0,
              willChange: 'opacity',
            }}
          />
        )}
      </div>
    </div>
  );
}
