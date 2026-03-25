"use client";
import { useReveal } from "@/components/useReveal";
export default function Edu() {
  const headRef = useReveal<HTMLHeadingElement>();
  return (
    <section id="edu" style={{ padding: "96px 52px", borderBottom: "1px solid var(--rule)" }}>
      <div className="title_wrap_b">
        <h2 ref={headRef}>EDUCATION.</h2>
        <p>교육</p>
      </div>
      <ul className="edu_list">
        <li>
          <span>2020.03 - 2024.08</span>
          <div className="edu_desc">
            <h3>대진대학교</h3>
            <h4>컴퓨터공학전공</h4>
            <p>웹 프로그래밍, 스마트앱 개발 및 React 기반 프론트엔드 구현 경험</p>
            <p>C, Java를 통한 프로그래밍 기초와 자료구조·알고리즘 등 CS 전반 학습</p>
          </div>
        </li>
        <li>
          <span>2022.05 - 2024.02</span>
          <div className="edu_desc">
            <h3>코리아IT 노원점</h3>
            <p>Java 개념과 기초이론을 응용하여 다양한 실무 예제를 통한 실습을 진행</p>
            <p>HTML, CSS로 기초적인 웹 환경을 만든 후 JSP를 배우면서 웹페이지에서 데이터를 입력받아 데이터베이스 연동을 통한 로그인, 회원가입 기능과 게시판 구현</p>
            <p>JavaScript와 Jquery를 사용한 브라우저 제어하는 방법과 데이터를 주고 받는 실습 진행</p>
            <p>Spring Framwork를 이용한 MVC 패턴으로 게시판 구현</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
