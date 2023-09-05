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

export { ChevronUpIcon, XIcon };
