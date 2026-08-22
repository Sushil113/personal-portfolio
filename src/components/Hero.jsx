import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import profileImg from '../../pic/zoro.jpg';

const Hero = ({ setActiveTab }) => {
  const { name, role, summary, location, email, phone, github } = resumeData.personalInfo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="w-full py-4"
    >
      {/* Signature REST Endpoint Header */}
      <div className="flex items-center space-x-2.5 mb-8 font-mono">
        <span className="px-2 py-0.5 text-xs font-semibold rounded-[4px] bg-accent/10 text-accent border border-accent/20">
          GET
        </span>
        <span className="text-sm text-on-surface font-semibold">/about</span>
      </div>

      {/* Available for Work Badge */}
      <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-[4px] bg-surface-raised border border-border text-xs text-on-surface-muted font-mono mb-8">
        <span className="w-1.5 h-1.5 rounded-[2px] bg-primary"></span>
        <span>Available for work</span>
      </div>

      {/* Profile and Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
        <img 
          src={profileImg} 
          alt={name}
          fetchpriority="high"
          decoding="async"
          className="w-24 h-24 rounded-[4px] border border-border object-cover grayscale"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-on-surface tracking-tight mb-1">
            {name}
          </h1>
          <h2 className="text-base font-mono text-on-surface-muted flex items-center gap-2 flex-wrap">
            <span className="text-primary">{role}</span>
            <span className="text-border">|</span>
            <span>{location}</span>
          </h2>
        </div>
      </div>

      {/* Summary */}
      <p className="text-on-surface-muted leading-relaxed text-sm md:text-base mb-8 max-w-2xl">
        {summary}
      </p>

      {/* Primary Actions */}
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => setActiveTab('contact')}
          className="flex items-center space-x-2 px-4 py-2 rounded-[4px] bg-primary text-background font-mono text-xs font-semibold hover:bg-primary/90 transition-colors"
        >
          <span>Let's Talk</span>
        </button>
        <a 
          href={`https://${github}`} 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center space-x-2 px-4 py-2 rounded-[4px] border border-border bg-transparent text-on-surface hover:border-primary hover:text-primary transition-colors text-xs font-mono"
        >
          <span>GitHub</span>
        </a>
      </div>

      {/* Monospaced System Data Details */}
      <div className="border-t border-border pt-6 mt-12 space-y-2 text-xs font-mono text-on-surface-muted">
        <div className="flex items-center space-x-2">
          <span className="text-primary">email:</span>
          <a href={`mailto:${email}`} className="hover:underline hover:text-primary">{email}</a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-primary">phone:</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-primary">github:</span>
          <a href={`https://${github}`} target="_blank" rel="noreferrer" className="hover:underline hover:text-primary">{github}</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
