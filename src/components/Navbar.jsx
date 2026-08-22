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
      className="fixed w-full top-0 z-50 bg-background border-b border-border"
    >
      <div className="max-w-[720px] mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={goHome} className="text-lg font-display font-semibold text-on-surface hover:text-primary transition-colors text-left">
          Sushil.
        </button>
        <div className="hidden md:flex space-x-6 h-full items-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative h-full py-2 text-sm font-mono transition-colors ${
                activeTab === tab.id 
                  ? 'text-primary font-medium' 
                  : 'text-on-surface-muted hover:text-on-surface'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
              )}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setActiveTab('contact')}
          className={`px-4 py-1.5 rounded-[4px] border text-xs font-mono hidden md:block transition-colors ${
            activeTab === 'contact'
              ? 'bg-primary text-background border-primary'
              : 'border-border text-on-surface hover:border-primary hover:text-primary'
          }`}
        >
          Let's Talk
        </button>
      </div>
      
      {/* Mobile navigation row */}
      <div className="md:hidden flex overflow-x-auto justify-center px-4 py-2 space-x-6 border-b border-border bg-background">
        {[...TABS, { id: 'contact', label: "Let's Talk" }].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-1.5 whitespace-nowrap text-sm font-mono transition-colors ${
              activeTab === tab.id 
                ? 'text-primary font-medium' 
                : 'text-on-surface-muted hover:text-on-surface'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
