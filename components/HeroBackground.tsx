"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const blobsRef = useRef<HTMLDivElement[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      blobsRef.current.forEach((blob, idx) => {
        if (!blob) return;
        gsap.to(blob, {
          x: gsap.utils.random(-28, 32),
          y: gsap.utils.random(-22, 26),
          scale: gsap.utils.random(0.95, 1.08),
          opacity: gsap.utils.random(0.22, 0.42),
          duration: gsap.utils.random(10, 14),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: idx * 0.35,
        });
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-[-220px] bottom-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060c] via-[#05060c] to-[#03040a]" />
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) blobsRef.current[idx] = el;
          }}
          className="hero-orb"
          style={{
            left: idx === 0 ? "-6%" : idx === 1 ? "58%" : "18%",
            top: idx === 0 ? "-8%" : idx === 1 ? "-12%" : "55%",
            width: idx === 1 ? "22rem" : "18rem",
            height: idx === 1 ? "22rem" : "18rem",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_32%,rgba(99,179,237,0.14),transparent_36%),radial-gradient(circle_at_80%_18%,rgba(255,195,125,0.12),transparent_34%)]" />
    </div>
  );
}
