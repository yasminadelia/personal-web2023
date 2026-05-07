const ChevronUpIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-up"
    width={size ? size : "44"}
    height={size ? size : "44"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color ? color : "#2c3e50"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 15l6 -6l6 6" />
  </svg>
);

const ChevronRightIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill={color ? color : "currentColor"}
    className="icon icon-tabler icons-tabler-filled icon-tabler-chevron-right"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9.707 5.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1 -1.414 -1.414l5.293 -5.293l-5.293 -5.293a1 1 0 0 1 1.414 -1.414" />
  </svg>
);

const XIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-x"
    width={size ? size : "44"}
    height={size ? size : "44"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color ? color : "#2c3e50"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

const HomeIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-home"
    width={size ? size : "44"}
    height={size ? size : "44"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color ? color : "#2c3e50"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
  </svg>
);

const ToolsIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "44"}
    height={size ? size : "44"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "#2c3e50"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-tools"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
    <path d="M14.5 5.5l4 4" />
    <path d="M12 8l-5 -5l-4 4l5 5" />
    <path d="M7 8l-1.5 1.5" />
    <path d="M16 12l5 5l-4 4l-5 -5" />
    <path d="M16 17l-1.5 1.5" />
  </svg>
);

const CalendarWeekIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M4 11h16" />
    <path d="M7 14h.013" />
    <path d="M10.01 14h.005" />
    <path d="M13.01 14h.005" />
    <path d="M16.015 14h.005" />
    <path d="M13.015 17h.005" />
    <path d="M7.01 17h.005" />
    <path d="M10.01 17h.005" />
  </svg>
);

const BuildingsIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-buildings"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
    <path d="M16 8h2c1 0 2 1 2 2v11" />
    <path d="M3 21h18" />
    <path d="M10 12v.01" />
    <path d="M10 16v.01" />
    <path d="M10 8v.01" />
    <path d="M7 12v.01" />
    <path d="M7 16v.01" />
    <path d="M7 8v.01" />
    <path d="M17 12v.01" />
    <path d="M17 16v.01" />
  </svg>
);

const CodeIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-code"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
);

const WorldIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-world"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

const UsersGroupIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M17 10h2a2 2 0 0 1 2 2v1" />
    <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
  </svg>
);

const TagIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-tag"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" />
  </svg>
);

const KeyIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-key"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0" />
    <path d="M15 9h.01" />
  </svg>
);

const PolaroidIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ? color : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-polaroid"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
    <path d="M4 16l16 0" />
    <path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" />
    <path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" />
    <path d="M14 7l.01 0" />
  </svg>
);

export {
  ChevronUpIcon,
  ChevronRightIcon,
  XIcon,
  HomeIcon,
  ToolsIcon,
  CalendarWeekIcon,
  BuildingsIcon,
  CodeIcon,
  WorldIcon,
  UsersGroupIcon,
  TagIcon,
  KeyIcon,
  PolaroidIcon,
};
