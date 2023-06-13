export const workList = [
  {
    id: 1,
    companyName: "FPT Software",
    timeServing: "Dec 2022 - Now",
    workingDuration:
      new Date().getMonth() <= 11
        ? `${new Date().getMonth() + 1} mos`
        : `1 yrs ${new Date().getMonth() + 1} mos`,
    companyAddress: "Thach That, Hanoi, Vietnam · On-site",
    role: "Front-End Web Developer · Full-time",
  },
  {
    id: 2,
    companyName: "VNTravel",
    timeServing: "Jul 2020 - Dec 2022",
    companyAddress: "36 Hoang Cau, Dong Da, Ha Noi · On-site",
    workingDuration: "2 yrs 6 mos",
    role: "Front-End Web Developer · Full-time",
  },
];

export const educationInfo = {
  name: "University of Engineering and Technology (UET - VNU)",
  major: "● Major: Information Technology",
  degreeGrade: "● Degree grade: Very Good – GPA 3.28/4",
  timeServing: "Aug 2017 - Jun 2021",
};

export const technilcaList = [
  {
    id: 1,
    skill: "Languages: JavaScript, TypeScript, HTML5, CSS3.",
  },
  {
    id: 2,
    skill:
      "Frameworks/ Libraries/ Platforms: ReactJS, Angular, NextJS, NodeJS, Webpack, Vite, Babel.",
  },
  {
    id: 3,
    skill: "Version Control: SVN, Git, Gitlab, Bitbucket.",
  },
  {
    id: 4,
    skill: "UX Research & UI Design.",
  },
  {
    id: 5,
    skill: "Experienced in debugging, fixing issues and developing software.",
  },
  {
    id: 6,
    skill: "Experienced implement responsive web app support for all devices, web accessibility.",
  },
  {
    id: 7,
    skill: "Skilled in leading teams, overseeing tasks and resolving issues, collaborating with cross-functional teams including QA, PM, and UI/UX, and adept at negotiating to align with customer requirements and define project concepts."
  }
];
