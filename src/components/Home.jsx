import { BENEFITS, PACKAGES, STEPS } from '../data';
import Banner from './Banner';
import GrayBox from './GrayBox';
import Pill from './Pill';
import PackageRow from './PackageRow';
import TreatmentsWidget from './TreatmentsWidget';

// Indulgence packages + gift card (.duo).
function Duo() {
  return (
    <section className="grid grid-cols-[1.2fr_1fr] gap-3 tab:grid-cols-1">
      <div className="rounded-[28px] p-[clamp(1.25rem,3vw,2.4rem)] bg-butter mob:rounded-[22px]">
        <h2>Indulgence packages</h2>
        <p className="mt-[.7rem] mb-4">From head to toe. Afterwards you will feel brand new.</p>
        <div>
          {PACKAGES.slice(0, 3).map((pkg) => (
            <PackageRow key={pkg[0]} pkg={pkg} />
          ))}
        </div>
        <div className="row flex flex-wrap gap-[.8rem] mt-6">
          <Pill variant="fill" href="#services">View all packages</Pill>
        </div>
      </div>

      <div className="rounded-[28px] p-[clamp(1.25rem,3vw,2.4rem)] bg-deep text-cream flex flex-col justify-between gap-6 mob:rounded-[22px]">
        <svg viewBox="-60 -60 120 120" aria-hidden="true" className="w-[100px] h-[100px] fill-none stroke-[#F6C834] [stroke-width:1]">
          <circle r="52" />
          <circle r="30" />
          {Array.from({ length: 12 }, (_, i) => (
            <ellipse key={i} cy="-40" rx="7" ry="16" transform={`rotate(${i * 30})`} />
          ))}
        </svg>
        <div>
          <h2>The exclusive gift idea</h2>
          <p className="mt-[.8rem] opacity-[.85]">Ask about our gift voucher and give the gift of relaxation.</p>
          <Pill variant="yel" href="#contact">Request a voucher</Pill>
        </div>
      </div>
    </section>
  );
}

// Dark contact block (.dark / .three).
function DarkContact() {
  return (
    <section className="py-[clamp(2.5rem,7vw,5.5rem)]">
      <div className="relative isolate overflow-hidden rounded-[28px] text-white text-center py-[clamp(2rem,6vw,5rem)] px-[clamp(1rem,4vw,3rem)] mob:rounded-[22px]">
        <GrayBox className="absolute inset-0 -z-[2]" />
        <div className="absolute inset-0 -z-[1] bg-[rgba(46,33,24,.82)]" />
        <h2 className="text-[clamp(1.7rem,4vw,3rem)] max-w-[22ch] mx-auto mb-[.6rem]">Write to us, call, or drop by.</h2>
        <p className="mt-0 mb-8 mx-auto opacity-[.85]">In the heart of Bad Endorf, yet a place where things instantly feel calmer.</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 text-left">
          <div className="rounded-[20px] p-6 text-deep bg-butter">
            <h3 className="mb-[.8rem]">Opening hours</h3>
            <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-[.3rem] text-[.9rem]">
              <dt className="font-medium">Monday–Saturday</dt>
              <dd className="m-0 [overflow-wrap:anywhere]">10 am – 7 pm</dd>
              <dt className="font-medium">Sunday</dt>
              <dd className="m-0 [overflow-wrap:anywhere]">Closed</dd>
            </dl>
          </div>

          <div className="rounded-[20px] p-6 text-deep bg-white flex flex-col justify-between gap-6">
            <h3 className="mb-[.8rem]">Arrive in calm</h3>
            <p className="text-[.9rem] m-0">Soft sounds, a warm scent and plenty of time. Every detail invites you to slow down.</p>
            <Pill variant="fill" href="#services">Treatments</Pill>
          </div>

          <div className="rounded-[20px] p-6 text-deep bg-butter">
            <h3 className="mb-[.8rem]">We look forward to seeing you</h3>
            <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-[.3rem] text-[.9rem]">
              <dt className="font-medium">Address</dt>
              <dd className="m-0 [overflow-wrap:anywhere]">Krichplatz 6, 83093 Bad Endorf</dd>
              <dt className="font-medium">Phone</dt>
              <dd className="m-0 [overflow-wrap:anywhere]">
                <a href="tel:+4980536859464" className="underline-offset-[3px]">08053 6859 464</a>
              </dd>
              <dt className="font-medium">Mobile</dt>
              <dd className="m-0 [overflow-wrap:anywhere]">
                <a href="tel:+4917641947586" className="underline-offset-[3px]">0176 4194 75 86</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero banner */}
      <Banner
        title="Relaxation for Body and Soul"
        text="Thai massage and spa in Bad Endorf. Warm oils, herbs and stillness to help you truly arrive."
      >
        <div className="row flex flex-wrap gap-[.8rem] mt-6">
          <Pill variant="yel" href="#contact">Book now</Pill>
          <Pill href="#services">View treatments</Pill>
        </div>
      </Banner>

      {/* About */}
      <section className="grid grid-cols-[1fr_1.3fr] items-start gap-[clamp(1.5rem,6vw,5rem)] tab:grid-cols-1 py-[clamp(2.5rem,7vw,5.5rem)] px-[clamp(.25rem,3vw,2.5rem)]">
        <div>
          <h2 className="text-[1.8rem]">About us</h2>
          <p className="text-muted mt-4 text-[.92rem]">
            A Thai massage and spa studio where every touch is meant to release tension, deepen your breath and bring you back to your centre.
          </p>
          <Pill href="#services">Learn more</Pill>
        </div>
        <div>
          <p className="text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[1.15] tracking-[-.02em]">
            A break you can <em className="font-serif">feel</em>. At <b className="font-semibold">Enjoy</b>, everyday life stays outside.
          </p>
          <p className="text-muted mt-[1.2rem]">
            Gentle pressure, stretches and the scent of warm herbs release tension and bring the body back into balance. Whether 30 minutes for the feet or 120 minutes for the whole body: you decide how long you stay.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-8 gap-y-[1.2rem] mt-8">
            {BENEFITS.map(([title, text]) => (
              <div key={title} className="border-t-2 border-t-yel pt-[.7rem]">
                <h3 className="font-sans font-semibold text-base leading-[normal] mb-[.2rem]">{title}</h3>
                <p className="text-[.9rem] text-muted m-0">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments widget */}
      <TreatmentsWidget />

      {/* How your visit works */}
      <section className="py-[clamp(2.5rem,7vw,5.5rem)] px-[clamp(.25rem,3vw,2.5rem)]">
        <div className="mb-[1.6rem]">
          <h2>How your visit works</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
          {STEPS.map(([num, title, text]) => (
            <div key={num} className="rounded-[22px] p-[1.6rem] bg-butter">
              <b className="font-serif italic font-normal text-[2.6rem] leading-none text-rust">{num}</b>
              <h3 className="mt-[.6rem] mb-[.4rem]">{title}</h3>
              <p className="text-[.92rem] m-0">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages + gift */}
      <Duo />

      {/* Dark contact block */}
      <DarkContact />
    </div>
  );
}
