export const getTimeExp = () => {
  const startDate = new Date("2023-09-01");
  const currentDate = new Date();
  const monthsDiff =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    startDate.getMonth();
  console.log("monthsDiff", monthsDiff);
  return Math.floor(monthsDiff / 12)
    ? `${Math.floor(monthsDiff / 12)} yrs ${monthsDiff % 12} mos`
    : `${monthsDiff} mos`;
};

export const workList = [
  {
    id: 1,
    companyName: "One Mount Real Estate",
    timeServing: "Sep 2023 - Now",
    workingDuration: getTimeExp(),
    role: "Senior Front-End Developer",
  },
  {
    id: 2,
    companyName: "FPT Software",
    timeServing: "Dec 2022 - Sep 2023",
    workingDuration: "10 mos",
    role: "Senior Front-End Developer",
  },
  {
    id: 3,
    companyName: "VNTravel",
    timeServing: "Jul 2020 - Dec 2022",
    workingDuration: "2 yrs 6 mos",
    role: "Front-End Developer",
  },
];

export const educationInfo = {
  name: "University of Engineering and Technology (UET - VNU)",
  major: "● Major: Information Technology",
  degreeGrade: "● Degree grade: Very Good – GPA 3.28/4",
  timeServing: "Aug 2017 - Jun 2021",
};

export const technilcaList = [
  { id: 1, label: "HTML5", iconKey: "html" },
  { id: 2, label: "CSS3", iconKey: "css" },
  { id: 3, label: "Tailwind CSS", iconKey: "tailwind" },
  { id: 4, label: "JavaScript", iconKey: "js" },
  { id: 5, label: "TypeScript", iconKey: "ts" },
  { id: 6, label: "React", iconKey: "react" },
  { id: 7, label: "Next.js", iconKey: "nextjs" },
  { id: 8, label: "Angular", iconKey: "angular" },
  { id: 9, label: "Node.js", iconKey: "nodejs" },
  { id: 10, label: "Vite", iconKey: "vite" },
  { id: 11, label: "Webpack", iconKey: "webpack" },
  { id: 12, label: "Babel", iconKey: "babel" },
  {
    id: 13,
    label: "Storybook",
    iconKey: "storybook",
    customIconUrl: "https://cdn.simpleicons.org/storybook/FF4785",
  },
  {
    id: 14,
    label: "Turbopack",
    iconKey: "turbo",
    customIconUrl: "https://cdn.simpleicons.org/turborepo/EF4444",
  },
  { id: 15, label: "Git", iconKey: "git" },
  { id: 16, label: "GitHub", iconKey: "github" },
  { id: 17, label: "GitLab", iconKey: "gitlab" },
  { id: 18, label: "Bitbucket", iconKey: "bitbucket" },
  { id: 19, label: "UX/UI", iconKey: "figma" },
];
