import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Education = () => {
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
        <span className="text-sm text-on-surface font-semibold">/education</span>
      </div>

      <div className="relative pl-6 border-l border-border ml-2.5 space-y-8">
        {resumeData.education.map((edu) => (
          <div key={edu.degree} className="relative">
            {/* Timeline node */}
            <div className="absolute -left-6 top-1.5 w-3 h-3 bg-primary rounded-[3px] -translate-x-1/2 border border-background" />
            
            {/* Content */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-on-surface-muted block">{edu.date}</span>
              <h3 className="text-lg font-semibold text-on-surface leading-snug">{edu.degree}</h3>
              <p className="text-sm font-mono text-primary">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
