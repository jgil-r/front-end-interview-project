export const Menu = ({ width = 18, height = 13 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 12.5H17" stroke="white" strokeLinecap="round" />
      <path d="M1 6.5H17" stroke="white" strokeLinecap="round" />
      <path d="M1 0.5H17" stroke="white" strokeLinecap="round" />
    </svg>
  );
};

export const Basket = ({ width = 18, height = 18 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.21825 7.18163C1.10473 6.56699 1.57658 6 2.20162 6H15.7984C16.4234 6 16.8953 6.56699 16.7817 7.18163L15.1194 16.1816C15.0318 16.6558 14.6183 17 14.136 17H3.86396C3.38172 17 2.96818 16.6558 2.88059 16.1816L1.21825 7.18163Z"
        stroke="white"
        strokeLinejoin="round"
      />
      <path
        d="M4.55556 3.5C4.55556 2.11929 5.67485 1 7.05556 1H10.9444C12.3252 1 13.4444 2.11929 13.4444 3.5V6H4.55556V3.5Z"
        stroke="white"
        strokeLinejoin="round"
      />
    </svg>
  );
};