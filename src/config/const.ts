type LogDataEntry = {
  icon: string;
  desc: string;
};

type LogData = {
  [key: string]: LogDataEntry;
};

export const LOG_DATA: LogData = {
  Web: {
    icon: "🌐",
    desc: "웹 개발과 관련된 전반적인 주제",
  },
  Javascript: {
    icon: "/tech/js.svg",
    desc: "JavaScript 관련 내용",
  },
  Typescript: {
    icon: "/tech/ts.svg",
    desc: "TypeScript 관련 내용",
  },
  React: {
    icon: "/tech/react.svg",
    desc: "React 관련 내용",
  },
  Vue: {
    icon: "/tech/vue.svg",
    desc: "Vue.js 관련 내용",
  },
  Next: {
    icon: "/tech/next.svg",
    desc: "Next.js 관련 내용",
  },
  Nuxt: {
    icon: "/tech/nuxt.svg",
    desc: "Nuxt.js 관련 내용",
  },
  Error: {
    icon: "🚨",
    desc: "직면한 에러와 해결 과정을 공유",
  },
  Algorithm: {
    icon: "🧮",
    desc: "알고리즘 문제 풀이와 핵심 개념",
  },
};

export const NAV_LIST = [
  { name: "Home", href: "/" },
  { name: "Article", href: "/articles" },
  { name: "Log", href: "/logs" },
];

export const HEADER_HEIGHT = 73;
