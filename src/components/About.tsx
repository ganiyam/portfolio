"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { useReveal } from "@/components/useReveal";
import Ticker from "./Ticker";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el?.classList.add("active");
        }
      },
      { threshold: 0.4 },
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);
  return (
    <motion.section
      id="about"
      style={{
        position: "absolute",
        left: 0,
        top: "100vh",
        width: "100%",
        height: "100vh",
        padding: "50px 20px",
        zIndex: 2,
        background: "#141212",
        display: "flex",
      }}
    >
      <div style={{ width: "50%", height: "100%", position: "relative" }}>
        <h1 className="content_tit">ABOUT</h1>
      </div>
      {/* <Ticker /> */}
      <div className="aboutme_content">
        <h3 ref={ref} className="about_desc">
          <b>React</b>와 <b>Next.js</b>를 주무기로, 사용자가 직접 맞닿는 화면을 만드는 <b>프론트엔드 개발자</b>입니다.
          <br />
          단순히 디자인을 구현하는 것을 넘어, 컴포넌트 구조와 상태 관리를 <b>고민</b>하고
          <br /> 렌더링 성능까지 챙기는 개발을 <b>지향</b>합니다.
          <br />
          느린 페이지, 깨지는 레이아웃, 불필요한 리렌더링
          <br /> — 사용자는 말하지 않아도 다 느낍니다. 좋은 UI는 보이지 않는 곳에서 완성된다고 믿습니다.
        </h3>
        <ul className="about_me">
          <li>
            <span>Name</span> <p>장가은 · Jang Gaeun </p>
          </li>
          <li>
            <span>Role</span> <p>Frontend Developer </p>
          </li>
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

        <div className="about_btns">
          <motion.a
            href="mailto:ganiyam13@gmail.com"
            className="btn contact"
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
            }}
          >
            Contact Me
          </motion.a>
          <button type="button" className="btn download">
            Download CV
          </button>
        </div>
      </div>
    </motion.section>
  );
}
