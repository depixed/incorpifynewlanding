import React from "react";

interface PrimaryCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const PrimaryCTA: React.FC<PrimaryCTAProps> = ({
  children,
  onClick,
  ariaLabel,
  className = "",
}) => {
  return (
    <button
      className={`all-[unset] box-border flex items-center justify-center gap-2.5 h-12 md:h-14 lg:h-[56px] px-5 md:px-6 lg:px-[22px] relative rounded-[12px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic bg-[linear-gradient(90deg,rgba(29,24,52,1)_0%,rgba(86,71,154,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[12px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className="inline-flex items-center justify-center pr-[var(--3-spacing-spacing-xxs)] pl-[var(--3-spacing-spacing-xxs)] py-0 relative z-10">
        <span className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-white text-base md:text-lg lg:text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
          {children}
        </span>
      </span>
    </button>
  );
};

