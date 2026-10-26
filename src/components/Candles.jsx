import { useEffect, useRef } from 'react';

// The three fixed candles (.candles). Flames lean with scroll speed, glow and
// flame grow with scroll depth, wax burns down – ported from the original script.
const CANDLES = [
  { x: 52, w: 66, h: 100, p: 0 },
  { x: 122, w: 78, h: 140, p: 2 },
  { x: 190, w: 60, h: 80, p: 4 },
];

export default function Candles() {
  const svgRef = useRef(null);
  const gRefs = useRef([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return undefined;

    const B = 222;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const E = CANDLES.map((c, i) => {
      const g = gRefs.current[i];
      return {
        c,
        gl: g.querySelector('.gl'),
        bd: g.querySelector('.bd'),
        sh: g.querySelector('.sh'),
        po: g.querySelector('.po'),
        wk: g.querySelector('.wk'),
        fl: g.querySelector('.fl'),
      };
    });

    let wind = 0;
    let last = window.scrollY;
    let raf = 0;

    const set = (node, attrs) => {
      for (const key in attrs) node.setAttribute(key, attrs[key]);
    };

    const draw = (t) => {
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / max));
      const dy = y - last;
      last = y;
      wind += ((reduce ? 0 : Math.max(-24, Math.min(24, -dy * 1.1))) - wind) * 0.12;
      const s = Math.min(1, Math.abs(wind) / 24);

      E.forEach((e) => {
        const c = e.c;
        const h = c.h * (1 - 0.2 * p);
        const top = B - h;
        set(e.bd, { x: c.x - c.w / 2, y: top, width: c.w, height: h });
        set(e.sh, { x: c.x + c.w / 2 - c.w * 0.28, y: top + 9, width: c.w * 0.28, height: h - 18 });
        set(e.po, { cx: c.x, cy: top + 1 });
        set(e.wk, { x: c.x - 1.2, y: top - 9 });
        const f = reduce ? 0 : Math.sin(t / 140 + c.p) * 0.05 + Math.sin(t / 57 + c.p * 2) * 0.03;
        const sw = reduce ? 0 : Math.sin(t / 900 + c.p) * 2;
        const sy = (0.92 + 0.2 * p) * (1 + f) * (1 + 0.25 * s);
        const sx = (1 + 0.5 * Math.abs(f)) * (1 - 0.15 * s);
        set(e.fl, { transform: `translate(${c.x} ${top - 8}) rotate(${wind + sw}) scale(${sx} ${sy})` });
        set(e.gl, { cx: c.x, cy: top - 30, r: 44 + 22 * p, opacity: 0.12 + 0.16 * p + f });
      });

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    if (reduce) {
      const onScroll = () => draw(0);
      draw(0);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="fixed right-[max(12px,env(safe-area-inset-right))] bottom-[max(8px,env(safe-area-inset-bottom))] w-[clamp(84px,11vw,150px)] z-20 pointer-events-none mob:w-[78px]"
      aria-hidden="true"
    >
      <svg ref={svgRef} viewBox="0 0 240 230" className="block w-full h-auto overflow-visible">
        {CANDLES.map((c, i) => (
          <g key={c.x} ref={(el) => (gRefs.current[i] = el)}>
            <circle className="gl" fill="#F6C834" />
            <rect className="bd" rx="9" fill="#FBE7A1" />
            <rect className="sh" fill="#F0D677" />
            <ellipse className="po" rx={c.w / 2 - 5} ry="5" fill="#F0D677" />
            <rect className="wk" width="2.4" height="9" fill="#5A4636" />
            <g className="fl">
              <path d="M0 0C-11-14-10-32 0-50C10-32 11-14 0 0Z" fill="#F7A928" />
              <path d="M0 0C-5-8-5-18 0-28C5-18 5-8 0 0Z" fill="#FFF1A6" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
