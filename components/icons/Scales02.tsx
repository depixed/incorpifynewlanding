import React from "react";

interface IconProps {
  className?: string;
}

export const Scales02: React.FC<IconProps> = ({ className = "" }) => {
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
        d="M9 3H15M12 3V21M12 21H17M12 21H7M5.5 6L3 12H10L7.5 6M16.5 6L14 12H21L18.5 6M7.5 6H16.5M7.5 6L5.5 9M16.5 6L18.5 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};






