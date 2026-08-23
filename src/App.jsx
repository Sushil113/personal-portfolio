import { useState, useEffect, useCallback, lazy, Suspense, memo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

const YEAR = new Date().getFullYear();

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('color-theme');
      if (storedTheme) return storedTheme;
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col bg-background text-on-surface">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />
      
      <div className="flex-grow pt-36 sm:pt-28 pb-16 max-w-[720px] mx-auto px-6 w-full flex flex-col justify-center">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh] text-on-surface-muted font-mono">Loading…</div>}>
          {activeTab === 'about' && <Hero setActiveTab={setActiveTab} />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'education' && <Education />}
          {activeTab === 'contact' && <Contact />}
        </Suspense>
      </div>
      
      <footer className="border-t border-border py-10 mt-auto">
        <div className="max-w-[720px] mx-auto px-6 text-center text-on-surface-muted text-xs font-mono">
          <p>© {YEAR} Sushil Ramtel. All rights reserved.</p>
          <p className="mt-1 text-on-surface-muted/60">Built with React, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
