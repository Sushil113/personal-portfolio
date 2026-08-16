import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Academic <span className="text-gradient">Background</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface border border-white/5 p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="relative z-10">
                <span className="text-sm font-medium text-primary mb-2 block">{edu.date}</span>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
