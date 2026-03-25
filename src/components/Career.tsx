"use client";
import { useReveal } from "@/components/useReveal";
import { CAREER } from "@/components/data";
import { useState } from "react";

export default function Career() {
  const headRef = useReveal<HTMLHeadingElement>();
  const [open, setOpen] = useState(false);

  return (
    <section id="experience" style={{ padding: "96px 52px" }}>
      <div className="title_wrap_b">
        <h2 ref={headRef}>EXPERIENCE.</h2>
        <p>기술 경력</p>
        <span>
          다양한 기술과 업무를 통해<br></br> 실무 경험을 쌓아가고 있습니다.
        </span>
      </div>
      <ul className="edu_list">
        <li>
          <span>2024.06 - 현재</span>
          <div className="edu_desc">
            <h3>(주)비엔시스템</h3>
            <h4>퍼블리셔, React 프론트엔드</h4>

            <div className="btn_detail">
              <button onClick={() => setOpen(!open)}>
                <h6 className={`icon ${open ? "minus" : "plus"}`}></h6>주요 업무 내용
              </button>
              {open && (
                <div className="detail_desc">
                  <p>개발 및 유지보수 (React.js, Next.js, Typescript 기반)</p>
                  <p>디지털 교과서 React 프론트 개발</p>
                  <p>영상 강의 사이트 관리자 페이지 Next.js 프론트 개발</p>
                  <p>성형외과 채팅 관리 사이트 React UI 퍼블리싱</p>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
