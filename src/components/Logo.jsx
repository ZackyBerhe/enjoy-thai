export default function Logo({ className = '', smallClassName = '', label }) {
  return (
    <a href="#home" aria-label={label} className={`flex items-center gap-[.55rem] no-underline font-medium text-[1.05rem] leading-[normal] tracking-[.06em] ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-[26px] w-[26px] flex-none">
        <path d="M20 34C13 30 9 24 12 15c4 2 6 5 8 9 2-4 4-7 8-9 3 9-1 15-8 19Z" />
        <path d="M20 34c-9-1-14-6-15-12 6-1 11 1 15 6M20 34c9-1 14-6 15-12-6-1-11 1-15 6" />
      </svg>
      <span>
        ENJOY
        <small className={`block text-[.65rem] tracking-[.12em] opacity-[.85] font-normal mob:hidden ${smallClassName}`}>THAI MASSAGE</small>
      </span>
    </a>
  );
}
