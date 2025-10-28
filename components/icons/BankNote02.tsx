import React from "react";

interface IconProps {
  className?: string;
}

export const BankNote02: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11ZM6 11C6 9.34315 7.34315 8 9 8M16 11C16 11.5523 16.4477 12 17 12C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11ZM16 11C16 9.34315 14.6569 8 13 8M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM21 7V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


