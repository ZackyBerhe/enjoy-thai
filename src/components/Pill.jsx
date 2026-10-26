import { ArrowIcon } from './Icons';

// Variants map 1:1 to the original .pill / .pill.fill / .pill.yel / .top .pill rules.
const VARIANTS = {
  default: {
    root: 'bg-transparent border-current',
    ar: 'bg-deep text-cream',
    pad: 'py-[.5rem] pl-[1.3rem] pr-[.5rem] text-[.9rem]',
  },
  fill: {
    root: 'bg-deep border-deep text-cream',
    ar: 'bg-yel text-deep',
    pad: 'py-[.5rem] pl-[1.3rem] pr-[.5rem] text-[.9rem]',
  },
  yel: {
    root: 'bg-yel border-yel text-deep',
    ar: 'bg-deep text-cream',
    pad: 'py-[.5rem] pl-[1.3rem] pr-[.5rem] text-[.9rem]',
  },
  top: {
    // .top .pill — no arrow (the original hides it inside the header).
    root: 'bg-white border-white text-deep py-[.55rem] px-[1.1rem] text-[.78rem]',
    ar: '',
    pad: '',
  },
};

export default function Pill({ variant = 'default', href, children, className = '', ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.default;
  const cls = [
    'inline-flex items-center gap-[.7rem] font-sans font-medium leading-[normal] no-underline rounded-full border-[1.5px] cursor-pointer transition-transform duration-200 ease-[ease] min-h-[44px] hover:-translate-y-[2px]',
    // Original @media (max-width:720px) rule: .row .pill { flex:1 1 auto; justify-content:space-between }
    'mob:[.row_&]:flex-[1_1_auto] mob:[.row_&]:justify-between',
    v.root,
    v.pad,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Tag = href ? 'a' : 'button';

  return (
    <Tag className={cls} href={href} type={href ? undefined : 'button'} {...rest}>
      {children}
      {v.ar && (
        <span className={`grid place-items-center w-8 h-8 rounded-full flex-none ${v.ar}`}>
          <ArrowIcon />
        </span>
      )}
    </Tag>
  );
}
