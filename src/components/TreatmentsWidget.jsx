import { useEffect, useRef, useState } from 'react';
import { TREATMENTS, imgFor } from '../data';
import Pill from './Pill';
import PriceChips from './PriceChips';
import { PrevIcon, NextIcon } from './Icons';

// The interactive "Our treatments" widget (.card / .hd / .tabs / .tr).
export default function TreatmentsWidget() {
  const [k, setK] = useState(0);
  const tabRefs = useRef([]);
  const t = TREATMENTS[k];

  useEffect(() => {
    const btn = tabRefs.current[k];
    if (btn) btn.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [k]);

  const show = (i) => setK((i + TREATMENTS.length) % TREATMENTS.length);
  // Relative step with a functional update so rapid consecutive clicks accumulate
  // (same behavior as the original's synchronously-updated k).
  const step = (d) => setK((prev) => (prev + d + TREATMENTS.length) % TREATMENTS.length);

  return (
    <section
      data-reveal
      className="bg-white rounded-[28px] p-[clamp(1.1rem,3vw,2.2rem)] mob:rounded-[22px]"
      aria-label="Treatments"
    >
      <div className="grid grid-cols-[1fr_1.5fr] gap-x-8 gap-y-[1.5rem] items-start mb-[1.6rem] tab:grid-cols-1">
        <div>
          <h2>Our treatments</h2>
          <p className="text-[.9rem] text-muted mt-[.8rem] mb-0">
            Classic Thai techniques, warm oils and herbs. Choose your ritual and the duration that suits you.
          </p>
        </div>
        <div
          role="tablist"
          className="flex flex-wrap justify-end gap-2 tab:justify-start tab:flex-nowrap tab:overflow-x-auto tab:mx-[calc(-1*clamp(1.1rem,3vw,2.2rem))] tab:px-[clamp(1.1rem,3vw,2.2rem)] tab:[scrollbar-width:none] tab:[&::-webkit-scrollbar]:hidden"
        >
          {TREATMENTS.map((item, i) => (
            <button
              key={item.n}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              aria-selected={i === k}
              onClick={() => show(i)}
              className={`font-medium text-[.8rem] leading-[normal] px-4 py-[.6rem] min-h-[40px] rounded-full border-[1.5px] border-deep cursor-pointer whitespace-nowrap ${
                i === k ? 'bg-deep text-cream' : 'bg-transparent text-ink'
              }`}
            >
              {item.n}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[1.55fr_1fr] gap-[clamp(1.2rem,3vw,3rem)] items-stretch tab:grid-cols-1">
        <div className="relative rounded-[20px] overflow-hidden min-h-[320px] bg-butter tab:min-h-0 tab:aspect-[16/10]">
          <img key={t.n} src={imgFor(t)} alt={t.n} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute right-[14px] bottom-[14px] flex gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous treatment"
              className="bg-white text-deep w-11 h-11 rounded-full border-0 grid place-items-center cursor-pointer flex-none font-[Arial] text-[13.3333px] leading-[normal]"
            >
              <PrevIcon />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next treatment"
              className="bg-white text-deep w-11 h-11 rounded-full border-0 grid place-items-center cursor-pointer flex-none font-[Arial] text-[13.3333px] leading-[normal]"
            >
              <NextIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.06]">{t.n}</h3>
          <p className="text-[.92rem] text-muted mt-4">{t.d}</p>
          <PriceChips prices={t.p} />
          {/* The original keeps an empty .note element in the DOM (margin-top 1rem, font .92rem via .tr .tx>p), so it always occupies 16px. */}
          <p className="text-[.92rem] text-muted mt-4 mb-0">{t.x || ''}</p>
          <div className="row flex flex-wrap gap-[.8rem] mt-6">
            <Pill variant="fill" href="#contact">Book now</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
