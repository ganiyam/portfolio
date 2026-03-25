"use client";
import { useState } from "react";
import { useReveal } from "@/components/useReveal";
import { PROJECTS } from "@/components/data";
import Image from "next/image";
import { p } from "framer-motion/client";
type ProjectType = {
  mainImg: string;
  title: string;
  subtitle: string;
  notionUrl?: string;
  gitUrl?: string;
  pageUrl?: string;
  desc: string;
  detail: string;
  skills: string[];
};
export default function Projects() {
  const headRef = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  return (
    <section id="projects" style={{ padding: "96px 52px", borderBottom: "1px solid var(--rule)" }}>
      <div className="title_wrap_b">
        <h2 ref={headRef}>PROJECTS.</h2>
        <p>주요 프로젝트의 세부 사항을 확인해보세요.</p>
      </div>
      <div className={`project_list ${showAll ? "active" : ""}`}>
        <div
          className="item yalolza"
          onClick={() =>
            setSelectedProject({
              mainImg: "/yalolza_back.png",
              title: "yaLoLza",
              subtitle: '사이드 프로젝트 "yaLoLza"',
              desc: "리그오브레전드 전적 사이트",
              notionUrl: "https://wise-keyboard-85a.notion.site/Spring-boot-Team-project-yaLoLza-4734feb6072d40f1813cb6e99a851374?pvs=143",
              detail: `
        소환사 전적 조회, 챔피언 통계, 매치 히스토리 확인 기능을 구현한 프로젝트입니다.
        사용자에게 필요한 정보를 한눈에 볼 수 있도록 UI를 구성했고,
        데이터 구조를 고려해 화면을 설계했습니다.
        커뮤니티도 넣어 유저들간의 커뮤니케이션도 가능하게 설계했습니다.
      `,
              skills: ["/logo/html5.svg", "/logo/css3.svg", "/logo/spring.svg", "/logo/oracle.svg"],
            })
          }
        >
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
        <div
          className="item badydog"
          onClick={() =>
            setSelectedProject({
              mainImg: "/babydog_back.png",
              title: "Baby dog",
              subtitle: '사이드 프로젝트 "Baby dog"',
              desc: "강아지 용품 관련 쇼핑 앱",
              gitUrl: "https://github.com/ganiyam/Baby-dog-shopping-app",
              detail: `강아지 용품을 카테고리별로 탐색할 수 있도록 제작한 쇼핑 앱입니다.

상품 리스트, 상세 화면 등 주요 UI를 구현하며
사용자가 직관적으로 화면을 탐색할 수 있도록 구성했습니다.

이미지 중심의 레이아웃과 간단한 인터랙션을 통해
쇼핑 앱의 기본적인 사용자 경험을 구현하는 데 집중했습니다.

디자인부터 퍼블리싱 및 화면 구현까지 단독으로 진행한 프로젝트입니다.`,
              skills: ["/logo/kotlin.svg", "/logo/android.svg"],
            })
          }
        >
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
        <div
          className="item oo"
          onClick={() =>
            setSelectedProject({
              mainImg: "/oo_back.png",
              title: "O_O",
              subtitle: '사이드 프로젝트 "O_O"',
              desc: "토픽, 스포츠 커뮤니티",
              gitUrl: "https://github.com/dnwnsdud/O_O.com",
              detail: `토픽과 스포츠를 주제로 사용자들이 자유롭게 소통할 수 있도록 제작한 커뮤니티 웹 프로젝트입니다.

커뮤니티 서비스에 맞는 메인 화면과 게시판형 UI를 구현하고,
사용자가 다양한 주제의 콘텐츠를 쉽게 탐색할 수 있도록 화면 구조를 구성했습니다.

프로젝트에서는 메인 상점, 마이페이지, 결제 연동(tosspay) 관련 개발 작업과
전체 CSS 스타일 작업을 담당했습니다.

팀 프로젝트를 통해 화면 구현뿐 아니라
서비스 흐름에 맞는 UI 구조와 협업 방식도 함께 경험할 수 있었습니다.`,
              skills: ["/logo/react.svg", "/logo/node.svg", "/logo/mongo.svg", "/logo/github.svgrmfrh"],
            })
          }
        >
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
        <div
          className="item book"
          onClick={() =>
            setSelectedProject({
              mainImg: "/textbook_back.png",
              title: "미래엔 디지털 교과서",
              subtitle: "미래엔 디지털 교과서 웹 플랫폼 개발 참여",
              desc: "교과 콘텐츠 조회 및 학습 인터페이스 UI 구현, 사용자 인터랙션 기반 화면 구성 및 컴포넌트 개발",
              detail: `초등학생 대상 디지털 교과서 웹 플랫폼 개발 프로젝트에 참여했습니다.

학습 콘텐츠 조회, 문제 풀이, 듣기/말하기 등
교육 콘텐츠 기반의 인터페이스를 구현하며
사용자가 학습 흐름에 맞게 자연스럽게 이용할 수 있도록 화면을 구성했습니다.

React 기반으로 컴포넌트를 설계하고,
사용자 인터랙션에 따라 변화하는 UI를 구현하며
학습 경험을 고려한 화면 개발을 담당했습니다.

실제 서비스 프로젝트를 통해
협업 환경에서의 프론트엔드 개발 프로세스를 경험했습니다.`,
              skills: ["/logo/react.svg", "/logo/ts.svg", "/logo/lab.svg"],
            })
          }
        >
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
        </div>
        <div
          className="item coachmi"
          onClick={() =>
            setSelectedProject({
              mainImg: "/coachmi_back.png",
              title: "코치미",
              pageUrl: "https://coachmi.ai/",
              subtitle: "코치미 웹 서비스 퍼블리싱 및 프론트엔드 개발 참여",
              desc: "React 기반 UI 구현 및 관리자 페이지 전체 개발",
              detail: `코치미 웹 서비스 퍼블리싱 및 프론트엔드 개발에 참여했습니다.

React와 Next.js 기반으로 사용자 페이지와 관리자 페이지 UI를 구현했으며,
관리자 페이지 전반(회원 관리, 코치 관리, 매출 관리 등)을 담당했습니다.

데이터 리스트, 상세 조회, 필터링, 페이지네이션 등
관리 기능에 필요한 UI를 설계하고 구현했습니다.

컴포넌트 단위로 구조를 설계하여 재사용성과 유지보수성을 고려했으며,
사용자 인터랙션에 따른 상태 변화와 화면 업데이트를 처리했습니다.

실무 프로젝트를 통해 퍼블리싱을 넘어
프론트엔드 개발 영역까지 확장한 경험을 쌓을 수 있었습니다.`,
              skills: ["/logo/react.svg", "/logo/next.svg", "/logo/github.svg"],
            })
          }
        >
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
        <div
          className="item dalba"
          onClick={() =>
            setSelectedProject({
              mainImg: "/dalba_back.png",
              title: "달바 글로벌",
              pageUrl: "https://www.dalbaglobal.com/",
              subtitle: "화장품 회사 홈페이지 퍼블리싱 작업",
              desc: "반응형 웹 퍼블리싱 100% 단독 담당",
              detail: `화장품 브랜드 홈페이지 퍼블리싱을 단독으로 담당한 프로젝트입니다.

디자인 시안을 기반으로 메인 페이지를 포함한 전체 UI를 구현했으며,
브랜드 이미지에 맞는 깔끔한 레이아웃과 인터랙션을 반영했습니다.

반응형 웹으로 제작하여 다양한 디바이스 환경에서도
일관된 화면 구성이 유지되도록 작업했습니다.

전체 페이지 퍼블리싱을 단독으로 진행하며
구조화된 마크업과 재사용 가능한 스타일 구성을 고려해 구현했습니다.`,
              skills: ["/logo/html5.svg", "/logo/css3.svg", "/logo/js.svg"],
            })
          }
        >
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
        <div
          className="item wenerd"
          onClick={() =>
            setSelectedProject({
              mainImg: "/wenerd_back.png",
              title: "위너드 케어",
              pageUrl: "https://www.wenerdcare.com/main.php",
              subtitle: "의료 예약 회사 홈페이지 퍼블리싱 작업",
              desc: "반응형 웹 퍼블리싱 100% 단독 담당",
              detail: `의료 예약 홈페이지 퍼블리싱을 단독으로 담당한 프로젝트입니다.

디자인 시안을 기반으로 메인 페이지를 포함한 전체 UI를 구현했으며,
브랜드 이미지에 맞는 깔끔한 레이아웃과 인터랙션을 반영했습니다.

반응형 웹으로 제작하여 다양한 디바이스 환경에서도
일관된 화면 구성이 유지되도록 작업했습니다.

전체 페이지 퍼블리싱을 단독으로 진행하며
구조화된 마크업과 재사용 가능한 스타일 구성을 고려해 구현했습니다.`,
              skills: ["/logo/html5.svg", "/logo/css3.svg", "/logo/js.svg"],
            })
          }
        >
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
        <div
          className="item aisa"
          onClick={() =>
            setSelectedProject({
              mainImg: "/aisa_back.png",
              title: "아이사",
              pageUrl: "https://xn--vf4b17f91b.kr/",
              subtitle: "이사 홈페이지 퍼블리싱 작업",
              desc: "반응형 웹 퍼블리싱 100% 단독 담당",
              detail: `이사 홈페이지 퍼블리싱을 단독으로 담당한 프로젝트입니다.

디자인 시안을 기반으로 메인 페이지를 포함한 전체 UI를 구현했으며,
브랜드 이미지에 맞는 깔끔한 레이아웃과 인터랙션을 반영했습니다.

반응형 웹으로 제작하여 다양한 디바이스 환경에서도
일관된 화면 구성이 유지되도록 작업했습니다.

전체 페이지 퍼블리싱을 단독으로 진행하며
구조화된 마크업과 재사용 가능한 스타일 구성을 고려해 구현했습니다.`,
              skills: ["/logo/html5.svg", "/logo/css3.svg", "/logo/js.svg"],
            })
          }
        >
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
        <div
          className="item sodong"
          onClick={() =>
            setSelectedProject({
              mainImg: "/sodong_back.png",
              title: "소동",
              pageUrl: "https://sodong.co.kr/",
              subtitle: "소모임 홈페이지 퍼블리싱 작업",
              desc: "반응형 웹 퍼블리싱 100% 단독 담당",
              detail: `소모임 홈페이지 퍼블리싱을 단독으로 담당한 프로젝트입니다.

디자인 시안을 기반으로 메인 페이지를 포함한 전체 UI를 구현했으며,
브랜드 이미지에 맞는 깔끔한 레이아웃과 인터랙션을 반영했습니다.

반응형 웹으로 제작하여 다양한 디바이스 환경에서도
일관된 화면 구성이 유지되도록 작업했습니다.

전체 페이지 퍼블리싱을 단독으로 진행하며
구조화된 마크업과 재사용 가능한 스타일 구성을 고려해 구현했습니다.`,
              skills: ["/logo/html5.svg", "/logo/css3.svg", "/logo/js.svg"],
            })
          }
        >
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
        <div
          className="item b2b"
          onClick={() =>
            setSelectedProject({
              mainImg: "/b2b_back.png",
              title: "B2B 사이트",
              notionUrl: "https://www.notion.so/B2B-site1-32d395dac8268032a26fc84dc01fab19?source=copy_link",
              subtitle: "B2B 홈페이지 퍼블리싱 작업",
              desc: "반응형 웹 퍼블리싱 100% 단독 담당",
              detail: `B2B 홈페이지 퍼블리싱을 단독으로 담당한 프로젝트입니다.

디자인 시안을 기반으로 메인 페이지를 포함한 전체 UI를 구현했으며,
브랜드 이미지에 맞는 깔끔한 레이아웃과 인터랙션을 반영했습니다.

반응형 웹으로 제작하여 다양한 디바이스 환경에서도
일관된 화면 구성이 유지되도록 작업했습니다.

전체 페이지 퍼블리싱을 단독으로 진행하며
구조화된 마크업과 재사용 가능한 스타일 구성을 고려해 구현했습니다.`,
              skills: ["/logo/html5.svg", "/logo/css3.svg", "/logo/js.svg"],
            })
          }
        >
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
      {selectedProject && (
        <div className="project_modal" onClick={() => setSelectedProject(null)}>
          <div className="project_modal_inner" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal_close" onClick={() => setSelectedProject(null)}></button>
            <div className="modal_content">
              <h2>{selectedProject.title}</h2>
              <p className="sub_tit">{selectedProject.subtitle}</p>
              <p className="desc">{selectedProject.desc}</p>
              {selectedProject.notionUrl && (
                <div className="link">
                  <a href={selectedProject.notionUrl} target="_blank" className="sub_tit">
                    <p className="go_site"></p>
                    Notion
                  </a>
                </div>
              )}
              {selectedProject.gitUrl && (
                <div className="link">
                  <a href={selectedProject.gitUrl} target="_blank" className="sub_tit">
                    <p className="go_site"></p>
                    git
                  </a>
                </div>
              )}
              {selectedProject.pageUrl && (
                <div className="link">
                  <a href={selectedProject.pageUrl} target="_blank" className="sub_tit">
                    <p className="go_site"></p>
                    webSite
                  </a>
                </div>
              )}
              <p className="detail">{selectedProject.detail}</p>
              <p className="sub_tit mt20">사용스택</p>
              <div className="skills">
                {selectedProject.skills.map((skill, idx) => (
                  <div className="skill" key={idx}>
                    <Image src={skill} alt="skill" fill />
                  </div>
                ))}
              </div>
              <div className="main_img">
                <Image src={selectedProject.mainImg} alt="skill" fill />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
