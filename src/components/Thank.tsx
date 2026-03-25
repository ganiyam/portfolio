"use client";
import { useState } from "react";
import { useReveal } from "@/components/useReveal";
import Image from "next/image";

export default function Thanke() {
  const headRef = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" style={{ padding: "96px 52px", borderBottom: "1px solid var(--rule)" }}>
      <div className="title_wrap_b">
        <h2 ref={headRef}>감사합니다.</h2>
        <p>
          더 궁금한 점이 있다면<br></br>편하게 연락주세요
        </p>
      </div>
      <ul className="about_me" style={{ margin: "20px auto" }}>
        <li>
          <span>Email</span>
          <p>
            <a href="mailto:ganiyam13@gmail.com">ganiyam13@gmail.com</a>
          </p>
        </li>
        <li>
          <span>Phone</span>
          <p>010-9915-9199</p>
        </li>
        <li>
          <span>GitHub</span>
          <p>
            <a href="https://github.com/ganiyam" target="_blank">
              github.com/ganiyam
            </a>
          </p>
        </li>
      </ul>
    </section>
  );
}
