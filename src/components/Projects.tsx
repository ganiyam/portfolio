"use client";
import { useState } from "react";
import { useReveal } from "@/components/useReveal";
import { PROJECTS } from "@/components/data";
import Image from "next/image";

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="projects" style={{ padding: "96px 52px", borderBottom: "1px solid var(--rule)" }}>
      <div className="title_wrap_b">
        <h2 ref={headRef}>PROJECTS.</h2>
        <p>주요 프로젝트의 세부 사항을 확인해보세요.</p>
      </div>
      <div className={`project_list ${showAll ? "active" : ""}`}>
        <div className="item yalolza">
          <h1>yaLoLza</h1>
          <p>
            사이드 프로젝트 "yaLoLza"<br></br>리그오브레전드 전적 사이트
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className="skill">
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className="skill">
              <Image src="/logo/spring.svg" alt="SPRING BOOT" fill />
            </div>
            <div className="skill">
              <Image src="/logo/oracle.svg" alt="oracle" fill />
            </div>
          </div>
        </div>
        <div className="item badydog">
          <h1>Baby dog</h1>
          <p>
            사이드 프로젝트 "Baby dog"<br></br>강아지 용품 관련 쇼핑 앱
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/kotlin.svg" alt="Kotlin" fill />
            </div>
            <div className="skill">
              <Image src="/logo/android.svg" alt="android" fill />
            </div>
          </div>
        </div>
        <div className="item oo">
          <h1>O_O</h1>
          <p>
            사이드 프로젝트 "O_O"<br></br>토픽, 스포츠 커뮤니티
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/react.svg" alt="react" fill />
            </div>
            <div className="skill">
              <Image src="/logo/node.svg" alt="node" fill />
            </div>
            <div className="skill">
              <Image src="/logo/mongo.svg" alt="mongo" fill />
            </div>
            <div className="skill">
              <Image src="/logo/github.svg" alt="github" fill />
            </div>
          </div>
        </div>
        <div className="item book">
          <h1>미래엔 디지털 교과서</h1>
          <p>
            미래엔 디지털 교과서 웹 플랫폼 개발 참여<br></br>(React 기반 프론트엔드 개발 및 사용자 인터페이스 구현)
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/react.svg" alt="react" fill />
            </div>
            <div className="skill">
              <Image src="/logo/ts.svg" alt="ts" fill />
            </div>
            <div className="skill">
              <Image src="/logo/lab.svg" alt="lab" fill />
            </div>
          </div>
          {/* - 교과 콘텐츠 조회 및 학습 인터페이스 UI 구현
- 사용자 인터랙션 기반 화면 구성 및 컴포넌트 개발 */}
        </div>
        <div className="item coachmi">
          <h1>코치미</h1>
          <p>
            코치미 웹 서비스 퍼블리싱 및 프론트엔드 개발 참여
            <br></br> (React 기반 UI 구현 및 관리자 페이지 전체 개발)
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/react.svg" alt="react" fill />
            </div>
            <div className="skill">
              <Image src="/logo/next.svg" alt="next" fill />
            </div>
            <div className="skill">
              <Image src="/logo/github.svg" alt="github" fill />
            </div>
          </div>
        </div>
        <div className="item dalba">
          <h1>달바 글로벌</h1>
          <p>
            화장품 회사 홈페이지 퍼블리싱 작업  
            <br></br>반응형 웹<br></br>퍼블리싱 100% (단독 담당) <br></br>디자인 시안을 기반으로 전체 UI 구현  
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className="skill">
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className="skill">
              <Image src="/logo/js.svg" alt="js" fill />
            </div>
          </div>
        </div>
        <div className="item wenerd">
          <h1>위너드 케어</h1>
          <p>
            의료 예약 회사 홈페이지 퍼블리싱 작업  
            <br></br>반응형 웹<br></br>퍼블리싱 100% (단독 담당) <br></br>디자인 시안을 기반으로 전체 UI 구현  
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className="skill">
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className="skill">
              <Image src="/logo/js.svg" alt="js" fill />
            </div>
          </div>
        </div>
        <div className="item aisa">
          <h1>아이사</h1>
          <p>
            이사 회사 홈페이지 퍼블리싱 작업  
            <br></br>반응형 웹<br></br>퍼블리싱 100% (단독 담당) <br></br>디자인 시안을 기반으로 전체 UI 구현  
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className="skill">
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className="skill">
              <Image src="/logo/js.svg" alt="js" fill />
            </div>
          </div>
        </div>
        <div className="item sodong">
          <h1>레디포- 소동</h1>
          <p>
            소모입 앱 퍼블리싱 작업  
            <br></br>적응형 모바일<br></br>퍼블리싱 100% (단독 담당) <br></br>디자인 시안을 기반으로 전체 UI 구현  
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className="skill">
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className="skill">
              <Image src="/logo/js.svg" alt="js" fill />
            </div>
          </div>
        </div>
        <div className="item b2b">
          <h1>B2B 사이트 1,2,3</h1>
          <p>
            B2B 홈페이지 퍼블리싱 작업  
            <br></br>반응형 웹<br></br>퍼블리싱 100% (단독 담당) <br></br>디자인 시안을 기반으로 전체 UI 구현  
          </p>
          <div className="skills">
            <div className="skill">
              <Image src="/logo/html5.svg" alt="html5" fill />
            </div>
            <div className="skill">
              <Image src="/logo/css3.svg" alt="css3" fill />
            </div>
            <div className="skill">
              <Image src="/logo/js.svg" alt="js" fill />
            </div>
          </div>
        </div>
      </div>
      {!showAll && (
        <div className="btn_area">
          <button className="more_btn" onClick={() => setShowAll(true)}>
            더보기
            <p className="plus"></p>
          </button>
        </div>
      )}
    </section>
  );
}
