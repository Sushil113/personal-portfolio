import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Experience = () => {
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
        <span className="text-sm text-on-surface font-semibold">/experience</span>
      </div>

      <div className="space-y-6">
        {resumeData.experience.map((exp) => (
          <div
            key={`${exp.role}-${exp.company}`}
            className="bg-surface-raised border border-border p-6 rounded-[6px] hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-on-surface mb-1">{exp.role}</h3>
                <span className="text-sm font-mono text-primary">{exp.company}</span>
              </div>
              <div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-background text-on-surface-muted text-xs font-mono border border-border whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm text-on-surface-muted">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-primary font-mono text-sm leading-none">-</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
