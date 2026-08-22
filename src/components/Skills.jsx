import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const CATEGORY_ICONS = {
  backend:     '{ }',
  frontend:    '< >',
  development: '⌘',
  additional:  '+',
};

const Skills = () => {
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
        <span className="text-sm text-on-surface font-semibold">/skills</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <div
            key={category}
            className="bg-surface-raised border border-border p-6 rounded-[6px] flex flex-col"
          >
            <h3 className="text-sm font-display font-semibold mb-4 capitalize text-on-surface flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded-[4px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-mono">
                {CATEGORY_ICONS[category] ?? '◈'}
              </span>
              <span>{category}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono border border-border rounded-[4px] text-on-surface-muted bg-transparent hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
