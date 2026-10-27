import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Header from './components/Header';
import Footer from './components/Footer';
import Candles from './components/Candles';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Impressum from './components/Impressum';
import { TITLES } from './data';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const VIEWS = ['home', 'services', 'contact', 'impressum'];

const getView = () => {
  const h = window.location.hash.slice(1);
  return VIEWS.includes(h) ? h : 'home';
};

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const [view, setView] = useState(getView);
  const [menuOpen, setMenuOpen] = useState(false);
  const smoother = useRef(null);

  // Views via hash tokens (same routing as the original page).
  useEffect(() => {
    const onHash = () => setView(getView());
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('hashchange', onHash);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // One-time page setup: GSAP smooth scrolling. ScrollSmoother styles the
  // #smooth-wrapper/#smooth-content pair itself and reverts on kill().
  useEffect(() => {
    if (prefersReduced()) return undefined;
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
    });
    return () => {
      smoother.current?.kill();
      smoother.current = null;
    };
  }, []);

  // Per view: title, scroll reset, menu close and the scroll-reveal animation
  // of every [data-reveal] section (fades up once as it enters the viewport).
  // useLayoutEffect so the hidden initial state applies before the first paint.
  useLayoutEffect(() => {
    document.title = TITLES[view];
    window.scrollTo(0, 0);
    smoother.current?.scrollTop(0);
    setMenuOpen(false);

    if (prefersReduced()) return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 36,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [view]);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="relative mx-auto max-w-[1440px] pt-3 pb-3 pl-[max(12px,env(safe-area-inset-left))] pr-[max(12px,env(safe-area-inset-right))] xs:px-2">
            <Header view={view} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
              {view === 'home' && <Home />}
              {view === 'services' && <Services />}
              {view === 'contact' && <Contact />}
              {view === 'impressum' && <Impressum />}
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <Candles />
    </>
  );
}

export default App;
