import Logo from './Logo';
import Pill from './Pill';
import { BurgerIcon } from './Icons';
import { NAV } from '../data';

export default function Header({ view, menuOpen, setMenuOpen }) {
  return (
    <header
      id="top"
      className="absolute top-3 right-3 left-3 z-[5] flex items-center justify-between gap-4 px-[clamp(16px,3vw,32px)] py-[18px] text-white xs:inset-x-2 xs:top-2 mob:p-[14px_16px]"
    >
      <Logo label="Thai Massage Enjoy – Home" />

      <nav
        id="nav"
        aria-label="Main navigation"
        className={
          menuOpen
            ? 'flex gap-[clamp(.8rem,2.6vw,2.2rem)] mob:flex mob:flex-col mob:absolute mob:top-[calc(100%_-_4px)] mob:left-0 mob:right-0 mob:bg-deep mob:rounded-[20px] mob:p-[.6rem_1.2rem] mob:gap-0'
            : 'flex gap-[clamp(.8rem,2.6vw,2.2rem)] mob:hidden'
        }
      >
        {NAV.map((link, i) => {
          const active = view === link.view;
          const last = i === NAV.length - 1;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={[
                'text-[.72rem] tracking-[.12em] uppercase no-underline py-[.4rem] border-b-[1.5px] font-medium',
                active ? 'border-b-current' : 'border-b-transparent hover:border-b-current',
                menuOpen
                  ? `mob:text-[.85rem] mob:py-[.9rem] ${
                      last ? 'mob:border-b-0' : 'mob:border-b mob:border-b-[rgba(255,248,225,.15)]'
                    }`
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <Pill variant="top" href="#contact">Book now</Pill>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="nav"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className="hidden mob:grid w-11 h-11 rounded-full border-0 bg-[rgba(255,255,255,.92)] text-deep cursor-pointer place-items-center font-[Arial] text-[13.3333px] leading-[normal]"
      >
        <BurgerIcon />
      </button>
    </header>
  );
}
