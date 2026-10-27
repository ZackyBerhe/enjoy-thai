import { useState } from 'react';
import { FAQ, PACKAGES, TREATMENTS } from '../data';
import Banner from './Banner';
import Pill from './Pill';

// Schematic map SVG (kept from the original page).
function Map() {
  return (
    <div className="rounded-[20px] overflow-hidden bg-white">
      <svg viewBox="0 0 600 420" role="img" aria-label="Schematic map: Krichplatz 6 in Bad Endorf" className="block w-full h-auto">
        <rect width="600" height="420" fill="#F7F1DC" />
        <path d="M-10 330C120 290 200 380 330 350S520 300 610 340V430H-10Z" fill="#DDE6C6" />
        <path d="M420 -10C460 60 520 70 610 50V-10Z" fill="#DDE6C6" />
        <g stroke="#fff" strokeWidth="16" fill="none" strokeLinecap="round">
          <path d="M-10 190H610" />
          <path d="M300 -10V430" />
          <path d="M60 -10L180 430" />
          <path d="M450 -10L520 430" />
        </g>
        <g stroke="#EDE5C6" strokeWidth="7" fill="none" strokeLinecap="round">
          <path d="M-10 90H610" />
          <path d="M-10 280H610" />
          <path d="M150 -10V430" />
        </g>
        <g fill="#EDE5C6">
          <rect x="330" y="120" width="70" height="50" rx="8" />
          <rect x="410" y="120" width="40" height="50" rx="8" />
          <rect x="330" y="212" width="90" height="50" rx="8" />
          <rect x="215" y="212" width="70" height="50" rx="8" />
          <rect x="215" y="110" width="70" height="60" rx="8" />
        </g>
        <g transform="translate(300 190)">
          <circle r="36" fill="#F6C834" opacity=".5" />
          <path d="M0 0C-26-26-22-58 0-58S26-26 0 0Z" transform="translate(0 -4)" fill="#2E2118" />
          <circle cy="-34" r="8" fill="#FFF8E1" />
        </g>
        <text x="318" y="168" fontFamily="DM Sans,sans-serif" fontSize="15" fontWeight="600" fill="#2E2118">Thai Massage Enjoy</text>
        <text x="318" y="186" fontFamily="DM Sans,sans-serif" fontSize="12" fill="#6B6258">Krichplatz 6</text>
      </svg>
      <div className="flex flex-wrap gap-[.6rem] p-4">
        <Pill variant="fill" href="https://www.google.com/maps/search/?api=1&query=Krichplatz+6+83093+Bad+Endorf" target="_blank" rel="noopener">
          Get directions
        </Pill>
        <Pill href="https://www.openstreetmap.org/search?query=Krichplatz%206%2C%2083093%20Bad%20Endorf" target="_blank" rel="noopener">
          OpenStreetMap
        </Pill>
      </div>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const mail = form.elements.mail.value;
    if (!name || !/^\S+@\S+\.\S+$/.test(mail)) {
      setError('Please enter your name and a valid email address.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div>
      <Banner
        size="sm"
        title="Book an appointment"
        text="Write to us or give us a call. We will get back to you as soon as possible."
      />

      {/* Map + info + form */}
      <section data-reveal className="grid grid-cols-2 gap-3 items-start tab:grid-cols-1 py-[clamp(2.5rem,7vw,5.5rem)] px-[clamp(.25rem,3vw,2.5rem)]">
        <div>
          <Map />
          <dl className="mt-[1.4rem] grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4">
            <div>
              <dt className="font-semibold text-[.78rem] text-muted">Address</dt>
              <dd className="m-0">
                Krichplatz 6
                <br />
                83093 Bad Endorf
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[.78rem] text-muted">Opening hours</dt>
              <dd className="m-0">Mon–Sat, 10 am – 7 pm</dd>
            </div>
            <div>
              <dt className="font-semibold text-[.78rem] text-muted">Phone</dt>
              <dd className="m-0">
                <a href="tel:+4980536859464" className="underline-offset-[3px]">08053 6859 464</a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[.78rem] text-muted">Mobile</dt>
              <dd className="m-0">
                <a href="tel:+4917641947586" className="underline-offset-[3px]">0176 4194 75 86</a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white rounded-[28px] p-[clamp(1.1rem,3vw,2.2rem)] mob:rounded-[22px]">
          {sent ? (
            <div>
              <h3>Thank you!</h3>
              <p className="mt-[.6rem] mb-0">Your request has been received. We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-4 content-start">
              <div className="grid grid-cols-2 gap-4 mob:grid-cols-1">
                <label className="grid gap-[.3rem] font-medium text-[.85rem]">
                  Name
                  <input name="name" required autoComplete="name" className="text-ink bg-paper border-[1.5px] border-transparent rounded-[14px] px-4 py-[.8rem] w-full min-h-[48px] focus:outline-none focus:border-deep focus:bg-white" />
                </label>
                <label className="grid gap-[.3rem] font-medium text-[.85rem]">
                  Phone (optional)
                  <input name="tel" type="tel" autoComplete="tel" className="text-ink bg-paper border-[1.5px] border-transparent rounded-[14px] px-4 py-[.8rem] w-full min-h-[48px] focus:outline-none focus:border-deep focus:bg-white" />
                </label>
              </div>
              <label className="grid gap-[.3rem] font-medium text-[.85rem]">
                Email
                <input name="mail" type="email" required autoComplete="email" className="text-ink bg-paper border-[1.5px] border-transparent rounded-[14px] px-4 py-[.8rem] w-full min-h-[48px] focus:outline-none focus:border-deep focus:bg-white" />
              </label>
              <label className="grid gap-[.3rem] font-medium text-[.85rem]">
                Treatment
                <select name="t" className="text-ink bg-paper border-[1.5px] border-transparent rounded-[14px] px-4 py-[.8rem] w-full min-h-[48px] focus:outline-none focus:border-deep focus:bg-white">
                  <option value="">Not sure yet – please advise me</option>
                  {TREATMENTS.map((t) => (
                    <option key={t.n}>{t.f || t.n}</option>
                  ))}
                  {PACKAGES.map((p) => (
                    <option key={p[0]}>{p[0]}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-[.3rem] font-medium text-[.85rem]">
                Message
                <textarea name="msg" placeholder="Preferred date, duration, questions …" className="text-ink bg-paper border-[1.5px] border-transparent rounded-[14px] px-4 py-[.8rem] w-full min-h-[120px] resize-y focus:outline-none focus:border-deep focus:bg-white" />
              </label>
              {error && (
                <div role="alert" className="text-rust text-[.88rem]">
                  {error}
                </div>
              )}
              <Pill variant="fill" className="justify-self-start" type="submit">
                Send request
              </Pill>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section data-reveal className="rounded-[28px] p-[clamp(1.25rem,3vw,2.4rem)] bg-butter mob:rounded-[22px]">
        <h2>Frequently asked questions</h2>
        <div className="max-w-[820px] mt-[1.2rem]">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group border-t border-t-[rgba(46,33,24,.18)] py-4 last:border-b last:border-b-[rgba(46,33,24,.18)]">
              <summary className="cursor-pointer text-[1.15rem] leading-[normal] font-serif list-none flex justify-between gap-4 after:content-['+'] after:text-[1.4rem] after:leading-none group-open:after:content-['–']">
                {q}
              </summary>
              <p className="mt-[.6rem] mb-0 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
