import { useState, lazy, Suspense, memo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));

const YEAR = new Date().getFullYear();

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-grow pt-24 pb-12">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[80vh] text-gray-500">Loading…</div>}>
          {activeTab === 'about' && <Hero />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'education' && <Education />}
        </Suspense>
      </div>
      
      <footer className="border-t border-white/5 py-12 bg-background mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© {YEAR} Sushil Ramtel. All rights reserved.</p>
          <p className="mt-2 text-gray-600">Designed &amp; Built with React, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
