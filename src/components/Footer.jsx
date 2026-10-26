import Logo from './Logo';
import Pill from './Pill';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
  { href: '#impressum', label: 'Legal Notice' },
];

export default function Footer() {
  return (
    <footer className="rounded-[28px] bg-deep text-cream p-[clamp(1.5rem,4vw,3rem)] mt-3 grid gap-8 mob:rounded-[22px]">
      <div className="flex flex-wrap justify-between gap-6 mob:flex-col">
        <Logo className="text-cream" smallClassName="leading-[1.8]" />
        <div className="links flex flex-wrap gap-2 self-start">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[.7rem] tracking-[.1em] uppercase no-underline border border-[rgba(255,248,225,.5)] rounded-full px-[.9rem] py-[.5rem]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-6 mob:flex-col">
        <div>
          <h3 className="text-[1.6rem] italic">Relaxation for body and soul.</h3>
          <div className="row flex flex-wrap gap-[.8rem] mt-6">
            <Pill href="#contact">Book now</Pill>
          </div>
        </div>
        <small className="opacity-80 text-[.8rem] leading-[1.8]">
          Krichplatz 6, 83093 Bad Endorf
          <br />
          08053 6859 464 · 0176 4194 75 86
          <br />
          Mon–Sat 10 am – 7 pm
        </small>
      </div>

      <div className="border-t border-t-[rgba(255,248,225,.2)] pt-[1.2rem] text-[.78rem] opacity-[.75]">
        © 2026 Thai Massage Enjoy · <a href="#impressum">Legal Notice</a>
      </div>
    </footer>
  );
}
