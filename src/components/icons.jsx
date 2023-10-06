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

export { ChevronUpIcon, XIcon, HomeIcon };
