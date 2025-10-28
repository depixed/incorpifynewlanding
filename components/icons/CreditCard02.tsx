import React from "react";

interface IconProps {
  className?: string;
}

export const CreditCard02: React.FC<IconProps> = ({ className = "" }) => {
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
        d="M2 10H22M2 8.5C2 7.11929 3.11929 6 4.5 6H19.5C20.8807 6 22 7.11929 22 8.5V15.5C22 16.8807 20.8807 18 19.5 18H4.5C3.11929 18 2 16.8807 2 15.5V8.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


