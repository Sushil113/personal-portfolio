import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  return (
    <section className="py-12 bg-surface/30 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <p className="text-gray-400">My journey as a software developer.</p>
        </motion.div>

        <div className="space-y-8">
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface border border-white/5 p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-lg text-primary">{exp.company}</h4>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1.5 text-primary text-lg leading-none">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
