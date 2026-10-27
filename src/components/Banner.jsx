import { useEffect, useState } from 'react';
import { IMAGES } from '../data';

// .banner / .banner.sm from the original stylesheet. The background slowly
// cross-fades through all of the site photographs.
export default function Banner({ size = 'lg', title, text, children }) {
  const sm = size === 'sm';
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    // Warm the image cache so the later cross-fades don't flash unloaded photos.
    IMAGES.forEach((src) => {
      const im = new Image();
      im.src = src;
    });
    const id = window.setInterval(() => setActive((a) => (a + 1) % IMAGES.length), 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={`relative isolate flex items-end overflow-hidden rounded-[28px] text-white mob:rounded-[22px] ${
        sm ? 'min-h-[clamp(300px,44vh,420px)]' : 'min-h-[min(84svh,720px)]'
      }`}
    >
      <div className="absolute inset-0 -z-[2] bg-deep">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out duration-[1600ms] ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-[1] bg-[rgba(40,24,8,.45)]" />
      <div
        data-reveal
        className="w-full px-[clamp(1.25rem,4vw,3rem)] pb-[clamp(1.25rem,4vw,3rem)] pt-24 mob:pt-20"
      >
        <h1
          className={`font-serif italic font-normal leading-[1.04] max-w-[14ch] ${
            sm ? 'text-[clamp(2.2rem,5.6vw,4.4rem)]' : 'text-[clamp(2.4rem,7.4vw,6rem)]'
          }`}
        >
          {title}
        </h1>
        {text && <p className="mt-4 mb-0 max-w-[46ch]">{text}</p>}
        {children}
      </div>
    </div>
  );
}
