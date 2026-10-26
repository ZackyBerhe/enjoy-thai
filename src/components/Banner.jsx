import GrayBox from './GrayBox';

// .banner / .banner.sm from the original stylesheet.
export default function Banner({ size = 'lg', title, text, children }) {
  const sm = size === 'sm';
  return (
    <div
      className={`relative isolate flex items-end overflow-hidden rounded-[28px] text-white mob:rounded-[22px] ${
        sm ? 'min-h-[clamp(300px,44vh,420px)]' : 'min-h-[min(84svh,720px)]'
      }`}
    >
      <GrayBox className="absolute inset-0 -z-[2]" />
      <div className="absolute inset-0 -z-[1] bg-[rgba(40,24,8,.45)]" />
      <div className="w-full px-[clamp(1.25rem,4vw,3rem)] pb-[clamp(1.25rem,4vw,3rem)] pt-24 mob:pt-20">
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
