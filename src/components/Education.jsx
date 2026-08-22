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

      <div className="grid sm:grid-cols-2 gap-6">
        {resumeData.education.map((edu) => (
          <div
            key={edu.degree}
            className="bg-surface-raised border border-border p-6 rounded-[6px] hover:border-primary/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-on-surface-muted mb-2 block">{edu.date}</span>
              <h3 className="text-lg font-semibold text-on-surface mb-1">{edu.degree}</h3>
            </div>
            <p className="text-sm font-mono text-primary mt-2">{edu.institution}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
