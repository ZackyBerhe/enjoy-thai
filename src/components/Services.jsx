import { GROUPS, PACKAGES, TREATMENTS, imgFor } from '../data';
import Banner from './Banner';
import Pill from './Pill';
import PriceChips from './PriceChips';
import PackageRow from './PackageRow';

export default function Services() {
  return (
    <div>
      <Banner
        size="sm"
        title="Treatments and prices"
        text="Every massage comes in several lengths. Choose the duration that suits you."
      />

      {/* Service groups */}
      <section data-reveal className="py-[clamp(2.5rem,7vw,5.5rem)] px-[clamp(.25rem,3vw,2.5rem)]">
        {GROUPS.map(([name, desc], gi) => (
          <div key={name} className="mb-12">
            <h2 className="mb-[.4rem]">{name}</h2>
            <p className="text-muted">{desc}</p>
            {TREATMENTS.filter((t) => t.g === gi).map((t) => (
              <article
                key={t.n}
                className="grid grid-cols-[150px_1fr_1.1fr] gap-x-8 gap-y-[1.2rem] items-center py-[1.2rem] border-t border-line mob:grid-cols-[84px_1fr]"
              >
                <div className="h-[110px] rounded-[16px] overflow-hidden mob:h-[84px]">
                  <img src={imgFor(t)} alt="" loading="lazy" className="block w-full h-full object-cover" />
                </div>
                <div>
                  <h3>{t.f || t.n}</h3>
                  <p className="text-[.92rem] text-muted mt-[.3rem] mb-0">{t.d}</p>
                </div>
                <div className="mob:col-span-full">
                  <PriceChips prices={t.p} />
                  {t.x && <p className="text-[.92rem] text-muted mt-[.3rem] mb-0">{t.x}</p>}
                </div>
              </article>
            ))}
          </div>
        ))}
      </section>

      {/* Indulgence packages */}
      <section data-reveal className="rounded-[28px] p-[clamp(1.25rem,3vw,2.4rem)] bg-butter mob:rounded-[22px]">
        <h2>Indulgence packages</h2>
        <p className="mt-[.7rem] mb-[1.2rem]">
          These wellness programmes let you be pampered from head to toe. All packages last 90 minutes.
        </p>
        <div className="max-w-[800px]">
          {PACKAGES.map((pkg) => (
            <PackageRow key={pkg[0]} pkg={pkg} />
          ))}
        </div>
        <div className="row flex flex-wrap gap-[.8rem] mt-6">
          <Pill variant="fill" href="#contact">Book now</Pill>
        </div>
      </section>
    </div>
  );
}
