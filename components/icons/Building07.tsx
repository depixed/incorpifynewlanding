import React from "react";

interface IconProps {
  className?: string;
}

export const Building07: React.FC<IconProps> = ({ className = "" }) => {
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
        d="M13 11H17C18.1046 11 19 11.8954 19 13V21M13 21V6C13 4.89543 12.1046 4 11 4H6C4.89543 4 4 4.89543 4 6V21M2 21H22M7 8H9M7 12H9M7 16H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


