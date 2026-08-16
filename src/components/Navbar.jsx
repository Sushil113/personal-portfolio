import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';

// Defined outside component — never re-created on re-renders
const TABS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

const Navbar = memo(({ activeTab, setActiveTab }) => {
  const goHome = useCallback(() => setActiveTab('about'), [setActiveTab]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={goHome} className="text-xl font-bold text-gradient text-left">
          Sushil.
        </button>
        <div className="hidden md:flex space-x-2 bg-surface/50 p-1 rounded-full border border-white/5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <a 
          href="mailto:sushilramtel113@gmail.com"
          className="px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all text-sm font-semibold hidden md:block"
        >
          Let's Talk
        </a>
      </div>
      
      {/* Mobile navigation row */}
      <div className="md:hidden flex overflow-x-auto px-4 py-3 space-x-2 border-t border-white/5 bg-background">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 whitespace-nowrap rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id 
                ? 'bg-white/10 text-white shadow-sm border border-white/10' 
                : 'text-gray-400 hover:text-white bg-surface border border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
