import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Candles from './components/Candles';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Impressum from './components/Impressum';
import { TITLES } from './data';

const VIEWS = ['home', 'services', 'contact', 'impressum'];

const getView = () => {
  const h = window.location.hash.slice(1);
  return VIEWS.includes(h) ? h : 'home';
};

function App() {
  const [view, setView] = useState(getView);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.title = TITLES[view];
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [view]);

  return (
    <>
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
      <Candles />
    </>
  );
}

export default App;
