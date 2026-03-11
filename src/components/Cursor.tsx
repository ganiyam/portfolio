"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, lx = 0, ly = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top  = my + "px";
      }
    };

    const loop = () => {
      lx += (mx - lx) * 0.12;
      ly += (my - ly) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = lx + "px";
        ringRef.current.style.top  = ly + "px";
      }
      raf = requestAnimationFrame(loop);
    };

    const addHov = () => document.body.classList.add("hov");
    const rmHov  = () => document.body.classList.remove("hov");

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const targets = document.querySelectorAll("a,button,.pj,.sk-card,.car,.btn");
    targets.forEach(el => {
      el.addEventListener("mouseenter", addHov);
      el.addEventListener("mouseleave", rmHov);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="c-dot" />
      <div ref={ringRef} className="c-ring" />
    </>
  );
}
