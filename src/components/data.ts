// ── data ──────────────────────────────────────────
export const STATS = [
  { n: "3+",  l: "Years Experience" },
  { n: "15+", l: "Projects Shipped" },
  { n: "10만", l: "Users Reached" },
  { n: "22+", l: "Tech Stack" },
];

export const TICKER_ITEMS = [
  "React","Next.js","Node.js","TypeScript","PostgreSQL",
  "Docker","AWS","GraphQL","NestJS","Redis",
];

export const SKILLS = [
  {
    n: "01", title: "Frontend",
    tags: ["React","Next.js","TypeScript","Vue.js","TailwindCSS","SCSS","Zustand","React Query","Storybook"],
  },
  {
    n: "02", title: "Backend",
    tags: ["Node.js","Express","NestJS","GraphQL","REST API","PostgreSQL","MySQL","MongoDB","Redis","Prisma"],
  },
  {
    n: "03", title: "Infra & DevOps",
    tags: ["AWS","Docker","CI/CD","GitHub Actions","Vercel","Nginx","Linux"],
  },
];

export const CAREER = [
  {
    idx: "i.", period: "2023.03 — 현재", type: "Full-time",
    company: "Company Name", role: "Fullstack Developer",
    desc: "서비스 Frontend 아키텍처 설계 및 개발. API 설계 및 백엔드 개발 참여. 성능 최적화로 로딩 속도 40% 단축. 사용자 1만 → 10만 스케일업 대응.",
  },
  {
    idx: "ii.", period: "2022.01 — 2023.02", type: "Full-time",
    company: "Previous Corp", role: "Frontend Developer",
    desc: "React 기반 SPA 개발 및 유지보수. 디자인 시스템 구축 및 컴포넌트 라이브러리 개발.",
  },
  {
    idx: "iii.", period: "2021.07 — 2021.12", type: "Intern",
    company: "Startup Inc", role: "Frontend Intern",
    desc: "신규 서비스 MVP 개발 참여. 디자인 시스템 구축 및 컴포넌트 라이브러리 개발.",
  },
];

export const PROJECTS = [
  {
    num: "01", name: "Project Alpha",
    desc: "실시간 협업 툴. WebSocket 기반 멀티유저 편집 환경과 복잡한 상태 동기화 구현.",
    stack: ["Next.js","NestJS","WebSocket","Redis","PostgreSQL"],
    detail: [
      "WebSocket + Redis Pub/Sub 기반 실시간 동시 편집 구현",
      "Operational Transformation 알고리즘으로 충돌 해결",
      "NestJS 모듈 아키텍처로 확장 가능한 구조 설계",
      "CI/CD GitHub Actions → AWS ECR → ECS 파이프라인 구축",
    ],
  },
  {
    num: "02", name: "Project Beta",
    desc: "대용량 데이터 시각화 대시보드. 수백만 건 데이터 실시간 처리 고성능 파이프라인.",
    stack: ["React","D3.js","Node.js","ClickHouse"],
    detail: [
      "D3.js 커스텀 차트 컴포넌트 12종 직접 개발",
      "ClickHouse 집계 쿼리 최적화로 응답 속도 70% 개선",
      "가상 스크롤로 100만 row 렌더링 성능 확보",
    ],
  },
  {
    num: "03", name: "Project Gamma",
    desc: "커머스 플랫폼 풀스택 개발. 결제 시스템 연동 및 재고 관리 구현. MAU 10만 달성.",
    stack: ["Vue.js","Express","MySQL","AWS"],
    detail: [
      "토스페이먼츠 결제 API 연동 및 정산 시스템 구현",
      "Redis 캐싱으로 상품 목록 API 응답 60% 단축",
      "AWS Auto Scaling으로 트래픽 급증 대응",
    ],
  },
  {
    num: "04", name: "Open Source UI",
    desc: "오픈소스 UI 컴포넌트 라이브러리. NPM 월 다운로드 5,000+. Storybook 기반 문서화.",
    stack: ["React","TypeScript","Storybook","Rollup"],
    detail: [
      "Rollup + TypeScript 빌드 파이프라인 구성",
      "30+ 컴포넌트 구현 및 Storybook 문서 작성",
      "Semantic versioning + GitHub Actions 자동 배포",
    ],
  },
];
