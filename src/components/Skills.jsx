import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

// Declarative icon map — resilient to category reordering
const CATEGORY_ICONS = {
  backend:     '{ }',
  frontend:    '< >',
  development: '⌘',
  additional:  '+',
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I use to build modern, scalable applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface border border-white/5 p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-6 capitalize text-white flex items-center space-x-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {CATEGORY_ICONS[category] ?? '◈'}
                </span>
                <span>{category}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-background border border-white/10 rounded-lg text-gray-300 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
