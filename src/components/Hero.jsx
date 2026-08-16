import { motion } from 'framer-motion';
import { Mail, Phone, Github, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import profileImg from '../../pic/zoro.jpg';

const Hero = () => {
  const { name, role, summary, location, email, phone, github } = resumeData.personalInfo;

  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-sm text-gray-300 mb-6 mt-8 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Available for work</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I'm <br />
            <span className="text-gradient">{name}</span>
          </h1>
          <h2 className="text-2xl text-gray-400 mb-6">{role}</h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${email}`} className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-blue-600 transition-colors">
              <Mail size={18} />
              <span>Email Me</span>
            </a>
            <a href={`https://${github}`} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-surface border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-sm text-gray-500 pb-8 md:pb-0">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>{phone}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative order-first md:order-last mt-8 md:mt-0"
        >
          <div className="aspect-square rounded-3xl bg-surface border border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src={profileImg} 
              alt="Sushil Ramtel"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl z-[-1]"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-[-1]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
